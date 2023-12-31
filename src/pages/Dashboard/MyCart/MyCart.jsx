import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/UseCart";
import { FaTrashAlt} from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
 const totalPrice =parseFloat(total.toFixed(2));
  const handleDelete = (item) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://bistro-boss-server-gray-ten.vercel.app/carts/${item._id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
             if(data.deletedCount > 0){
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
             }
          })
        }
      })
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Adda Ghor | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h2 className="text-2xl">Total Items: {cart.length}</h2>
        <h2 className="text-2xl">Total price:$ {totalPrice}</h2>
       <Link to='/dashboard/payment'>
       <button className="btn btn-warning btn-sm">PAY</button>
       </Link>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            cart.map((item, index) =>
                <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center  ">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                 {item.name}
                </td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button onClick={()=>handleDelete(item)} className="btn btn-ghost bg-red-600 text-white  "><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>
                
                )
          }
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
