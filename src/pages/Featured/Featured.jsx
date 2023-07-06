import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-items bg-fixed text-white pt-8 my-20">
           <SectionTitle
           subHeading={'check it out'}
           heading={'Featured Item'}
           ></SectionTitle> 
          <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 opacity-50">
          <div>
          <img src={featuredImg} alt="" />
          </div>

          <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem recusandae repudiandae in accusamus, ipsam dolorem.</p>
          <button className=" rounded-full font-bold text-white p-4 border-0 border-b-4 border-[#1A6CC4]">Order Now</button>
          </div>
          </div>
        </div>
    );
};

export default Featured;