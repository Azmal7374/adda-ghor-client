import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/UseCart";


const stripePromise =loadStripe(import.meta.env.VITE_Payment_Gateway_pk)

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=> sum + item.price, 0)
   const price = parseFloat(total.toFixed(2))
    return (
        <div>
        <SectionTitle
        subHeading='please process payment'
        heading='Payment'
        ></SectionTitle>
             

            <Elements stripe={stripePromise}>
            <CheckoutForm price={price} cart={cart}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;