
const Follow = () => {
    const images = [
        " https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/louis-hansel-shotsoflouis-KQR3ENYfrpw-unsplash-768x771.jpg",
        "https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/wesual-click-SrX3-GldyL0-unsplash-768x511.jpg ",
        " https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/bundo-kim-Pb9bUzH1nD8-unsplash-768x1152.jpg",
        " https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/alasdair-elmes-ULHxWq8reao-unsplash-768x512.jpg",
        " https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/eiliv-sonas-aceron-cWqxHoa3zXk-unsplash-768x1152.jpg",
        "https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/stephan-valentin-l2viCaR3JUo-unsplash-768x768.jpg ",
        " https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/volkan-vardar-1H30uRC1plc-unsplash-678x1024.jpg",
        "https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/image-from-rawpixel-id-1228629-jpeg-768x1152.jpg  ",
        " https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/image-from-rawpixel-id-1054343-jpeg-768x1152.jpg",
        " https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/image-from-rawpixel-id-2269664-jpeg-768x1152.jpg",
        " https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/image-from-rawpixel-id-2701795-png.png",
        " https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/image-from-rawpixel-id-2602283-png.png",
       
      ]
      return (
     <div className="mt-20">
     
     <div className="w-96 mx-auto">
     <h1 className="text-center text-[#1A6CC4]">FOLLOW ALONG</h1>
     <div className="flex gap-2 mt-2 border-y-4 p-4 border-[#1A6CC4]">
     <img className="w-20" src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/noun_wavy-lines_1781282.png" alt="" />
     <p className="text-3xl md:text-4xl font-bold ">@AddaGhor</p>
     <img className="w-20" src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo8/wp-content/uploads/sites/8/2021/01/noun_wavy-lines_1781282.png" alt="" />
     </div>
     </div>
     <div className="mt-10 container mx-auto px-5  lg:px-32  ">
          
     <div className="-m-1 flex flex-wrap md:-m-2">
       {images.map((image, index) => (
         <div key="{index}" className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2" data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000">
           <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src={image}/>
         </div>
       ))}
     </div>
   </div>
     </div>
      );
};

export default Follow;