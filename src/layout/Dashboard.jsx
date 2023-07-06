import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUtensils, FaBook, FaUsers,FaShoppingCart, FaCalendarAlt } from "react-icons/fa";
import useCart from "../hooks/UseCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [cart] = useCart();
  //TODO: load data from server to have dynamic isAdmin baesd on data
  // const isAdmin = true;
  
   const [isAdmin] = useAdmin()
   console.log(isAdmin)
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
        <label
          htmlFor="my-drawer-2"
          className="  drawer-button lg:hidden"
        >
        open
        </label>
        <Outlet></Outlet>

      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#1A6CC4]   text-white">
          {isAdmin ? 
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils> Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <FaWallet></FaWallet> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          : 
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge inl badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          }

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
