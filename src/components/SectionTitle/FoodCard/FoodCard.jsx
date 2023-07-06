import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/UseCart";

const FoodCard = ({item}) => {
    const{name, image, price, recipe, _id} = item
    const {user} =useContext(AuthContext)
    const [, refetch] = useCart()
    
    const navigate = useNavigate()
    const location = useLocation()



    const handleAddToCard = (item) =>{
        console.log(item)
        if(user){
          const cartItem = {menuItemId: _id, name, price ,image, email:user.email}
          fetch('https://bistro-boss-server-gray-ten.vercel.app/carts', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(cartItem)
          })
          .then(res => res.json())
          .then(data =>{
            if(data.insertedId){
              refetch(); // refetch  cart to update the number of items in the cart 
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              
            }
          })
        }
        else{
          Swal.fire({
            title: 'Plese login to order the food',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now'
          }).then((result) => {
            if (result.isConfirmed) {
               navigate('/login', {state : {from:location}})
               
            }
          })
        }
    }

   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="img" /></figure>
        <p className="bg-[#1A6CC4] text-white absolute right-0 mr-4 mt-4 px-4 rounded-md font-bold">${price}</p>
        <div className="card-body text-center flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            
            <button  onClick={()=>handleAddToCard(item)} className=" rounded-full font-bold text-[#1A6CC4] p-4 border-0 border-b-4 border-[#1A6CC4]">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;