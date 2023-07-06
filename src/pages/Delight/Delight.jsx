import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Delight = () => {
    return (
        <div className="mt-20">
        <SectionTitle
        subHeading="View Menus"
        heading="Chef
        Recommend"
        ></SectionTitle>
          <div className="md:flex items-center  gap-20">
          
          <div className="p-4">
          <h1>DELIGHT IN EVERY BITE</h1>
          <h2 className="text-4xl font-bold mt-4">Our Chef <br /> Recommend</h2>
          <p className="mt-4"> Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation.</p>
          <Link to='/menu'>
          <button className="mt-8 p-3 border-2 text-[#1A6CC4] font-bold border-[#1A6CC4]">View Menus</button>
          </Link>
          </div>
          <div>
          <img src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/image-from-rawpixel-id-2822722-png-874x1024.png" alt="" />

          
          </div>
          </div>  
        </div>
    );
};

export default Delight;