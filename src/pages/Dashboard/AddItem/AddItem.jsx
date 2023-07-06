import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token =import.meta.env.VITE_Image_Upload_token
const AddItem = () => {
    const [axiosSecure] =useAxiosSecure()
    const { handleSubmit, register, reset} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  
    const onSubmit = data =>  {
        
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageResponse => {
            // console.log(imageResponse)
            if(imageResponse.success){
                const imgURL =imageResponse.data.display_url;
                const {name, price, category, recipe} = data 
                const newItem  = {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem)
                axiosSecure.post('/menu',newItem)
                .then(data => {
                    console.log("After posting new menu item", data.data)
                    if(data.data.insertedId) {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }


  return (
    <div className="w-full ">
      <SectionTitle
        heading="What's New"
        subHeading="Add an Item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="px-10">
        <div className="form-control  w-full  ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"  {...register("name", {
                required: "true",
                maxLength:120
                })}
            className="p-3  rounded-md w-full  "/>
        </div>
        
        <div className="flex gap-4">
        
        <div className="form-control  w-full   ">
          <label className="label">
            <span className="label-text font-semibold">Category*</span>
          </label>
          <select defaultValue="Pck One" {...register("category", {
            required: "true"
            })} className=" p-3 rounded-md select-bordered w-full  " >
            <option disabled  >
            Pizza
            </option>
            <option>Pizza</option>
            <option>Salad</option>
            <option> Soup</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </div>

        <div className="form-control   ">
          <label className="label">
            <span className="label-text font-semibold"> Price</span>
          </label>
          <input
            type="number" {...register("price", {
                required: "true"
                })} 
            placeholder=" Price"
            className="p-3  rounded-md  w-full    "
          />
        </div>
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea {...register("recipe", {
            required: "true"
            })} 
            className=" p-3 textarea-bordered h-24 w-full  "
            placeholder="details"
          ></textarea>
        </div>

        <div className="form-control my-4  ">
  <label className="label">
    <span className="label-text">Item Image*</span>
  
  </label>
  <input {...register("image", {
    required: "true"
    })}  type="file" className="file-input file-input-bordered w-full  " />
 
</div>

<input className=" h-12 bg-black text-white  w-32 flex justify-center items-center btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
