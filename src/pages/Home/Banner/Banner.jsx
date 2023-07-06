import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel className="text-center ">
      <div>
        <img src="https://img.freepik.com/free-psd/web-banner-template-japanese-restaurant_23-2148203260.jpg?size=626&ext=jpg&ga=GA1.2.220873417.1673880723&semt=ais"/>
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
