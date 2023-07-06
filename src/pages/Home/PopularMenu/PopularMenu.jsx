import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu() 
  const popular = menu.filter(item => item.category === 'popular')
  
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"popular items"}
        heading={"From Our Menu"}
      ></SectionTitle>

      <div className="grid grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
<div className="text-center mt-7">
<Link to="/menu">
<button className="bg-[#1A6CC4] font-bold p-3   text-white rounded-md">View Full Menu</button>
</Link>
</div>
    </section>
  );
};

export default PopularMenu;
