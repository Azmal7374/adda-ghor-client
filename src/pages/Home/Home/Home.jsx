import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../../Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
import Destination from "../../Destination/Destination";
import Delight from "../../Delight/Delight";
import Reservation from "../../Reservation/Reservation";
import Follow from "../../Follow/Follow";


const Home = () => {
 
    return (
        <div>
        <Helmet>
        <title>Adda Ghor | Home</title>
      </Helmet>
          <Banner></Banner>
          <Destination></Destination>
          <Delight></Delight>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
          <Testimonials></Testimonials>
          <Reservation></Reservation>
          <Follow></Follow>
        </div>
    );
};

export default Home;