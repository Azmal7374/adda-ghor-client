
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center  my-8">
            <div className="">
            <p className="text-[#1A6CC4] mb-2">  {subHeading}  </p>
            <h1 className="text-3xl uppercase border-y-4 border-[#1A6CC4] py-4">{heading}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;