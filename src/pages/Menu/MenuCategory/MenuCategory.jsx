import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
        {title && <Cover  img={img} title={title}>
        </Cover>}
        <div className="grid grid-cols-2 gap-10 my-16">
        {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={`/order/${title}`}>
        <button className=" rounded-full font-bold text-[#1A6CC4] p-4 border-0 border-b-4 border-[#1A6CC4]">Order Now</button>
        </Link>
        </div>
    );
};

export default MenuCategory;