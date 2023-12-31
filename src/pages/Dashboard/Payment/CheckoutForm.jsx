import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './CheckoutForm.css'

const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('')

  useEffect(() => {
     if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price,useAxiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // console.log('card', card)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("Payment method", paymentMethod);
    }
    setProcessing(true)

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    console.log("Payment Intent:",paymentIntent);
    setProcessing(false);
    if(paymentIntent.status ==='succeeded'){
      setTransactionId(paymentIntent.id);
      const payment = {
        email:user?.email, 
        transactionId: paymentIntent.id,
        price,
        quantity: cart.length,
        cartItems:cart.map(item => item._id),
        menuItems: cart.map(item => item.menuItemId),
        status:'service pending',
        itemName: cart.map(item => item.name)
      }
      axiosSecure.post('/payments', payment)
      .then(res => {
        console.log(res.data)

        if(res.data.insertedId){
          alert('Done')
        }
      })
      
    }
  };
  
  return (
    <>
      <form className="w-2/3 m-8 pt-10" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-[#1A6CC4] text-white font-bold rounded-sm btn-sm mt-4  border  "
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          PAY
        </button>
      </form>
      {cardError && <p className="text-red-400 text-center">{cardError}</p>}
      {transactionId && <p className="text-green-500  ">Transaction Complete With: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
