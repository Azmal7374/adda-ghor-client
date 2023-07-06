import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Reservation = () => {
    return (
        <div className="mt-20">
        <SectionTitle
        subHeading=" RESERVATION"
        heading="online
        Reservation"
        ></SectionTitle>
             <div className="bg-[url('https://img.freepik.com/free-photo/close-up-hands-barista-make-latte-coffee-art-paint_1150-12161.jpg?size=626&ext=jpg&ga=GA1.2.220873417.1673880723&semt=sph')] bg-cover text-center p-32">
              <h1 className="text-white mt-2">WE SAVED YOU A SEAT</h1>
              <h1 className="text-white font-bold text-4xl mt-2">Make an online <br /> Reservation</h1>
              <p className="text-white mt-2"> When the going gets tough, the tough get grilling. Bringing heat  <br /> to your meat. No one can compete with our meat</p>

              <h1 className="mt-8 md:w-4/12 mx-auto text-3xl uppercase border-y-4 border-[#1A6CC4] py-4 text-white">Reservation</h1>
             </div>
        </div>
    );
};

export default Reservation;