import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/UseCart";
import useAdmin from "../../../hooks/useAdmin";
import { IoIosRestaurant } from 'react-icons/io';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
   const [cart] = useCart()
   const [isAdmin] =useAdmin()

  const handleLogOut = () => {
     logOut()
     .then( () => {

     })
     .catch( (error) => {
      console.log(error.message);
     })
  }

   
    const navOptions = <>
    <li> <Link to='/'>Home</Link></li>
    <li> <Link to='/menu'>Our Menu</Link></li>
    <li> <Link to='/order/salad'>Order Food</Link></li>
    <li> <Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link></li>
    <li>
    <Link to='/dashboard/mycart'>
    <button className="   ">
      <FaShoppingCart className="text-xl "></FaShoppingCart>
  <div className="badge badge-secondary">+{cart.length || 0}</div>
</button>
    </Link>
    </li>
{
  user? <>
  <button onClick={handleLogOut} className="btn btn-ghost my-4">LogOut</button>
  
  </> :
  <>
  <li> <Link to='/login'>Login</Link></li> 
  </>
}
    
    </> 
    return (
        <>

        <div className="navbar fixed z-10   bg-blue-500  text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <IoIosRestaurant className="text-4xl text-white font-bold"></IoIosRestaurant>
    <p  className=" font-bold "> <span className="text-white text-3xl font-bold">Adda</span> Ghor</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="ml-4 md:navbar-end">
    <a className="bg-[#1A6CC4] p-3 rounded-md">Get started</a>
  </div>
</div>
        
            
        </>

        
    );
};

export default Navbar;