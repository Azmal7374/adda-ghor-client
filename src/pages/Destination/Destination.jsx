import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Destination = () => {
    return (
        <div className="mt-20">
        <SectionTitle
        subHeading="premium taste"
        heading="SPECIAL OCCASION"
        ></SectionTitle>

        <div className="md:flex items-center gap-10">
        
        <div>
        <img src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/volkan-vardar-1H30uRC1plc-unsplash-678x1024.jpg" alt="" />
        </div>

        <div>
        <h1 className=" ">YOUR SPECIAL OCCASION DESTINATION</h1>
        <p className="text-[#CFA670] text-2xl md:text-3xl mt-4 font-bold"> The  Adda Ghor is a premium taste that yearns to be savored, ground beef between your teeth</p>

        <img className="my-20 w-4/5" src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/divider.png" alt="" />
        </div>
        </div>
            
        </div>
    );
};

export default Destination;