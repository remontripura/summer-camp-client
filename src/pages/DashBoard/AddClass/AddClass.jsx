import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";


const img_hosting_token = import.meta.env.VITE_Image_Token
const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
    

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse)
        })
    }

    return (
        <div>
            <h2 className="font-bold text-center text-3xl text-[#D11F18]">Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10">
                <div className=" grid lg:grid-cols-2 gap-5">
                    {/* Naming Form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Class Name" className="px-2 py-3 border-2" />
                        {errors.name && <span className="text-red-500">Name field is required</span>}
                    </div>

                    {/* Photo Url Form */}
                    <div className="form-control m-0">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                        {errors.photo && <span className="text-red-500">Photo Url field is required</span>}
                    </div>

                    {/* Instructor Email Form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} defaultValue={user.email} readOnly className="px-2 py-3 border-2" />
                        {errors.email && <span className="text-red-500">email field is required</span>}
                    </div>

                    {/* Instructor Name Form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" {...register("instructor_name")} defaultValue={user.displayName} readOnly className="px-2 py-3 border-2" />
                    </div>

                    {/* Price Form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" {...register("price")} placeholder="Price" className="px-2 py-3 border-2" />
                    </div>

                    {/* Available Sheet form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Sheet</span>
                        </label>
                        <input type="number" {...register("sheet")} placeholder="Available Sheet" className="px-2 py-3 border-2" />
                    </div>
                </div>


                <input className="btn btn-block bg-[#ce4a46] hover:bg-[#D11F18] font-semibold mt-10" type="submit" value="Add New Class" />
            </form>
        </div>
    );
};

export default AddClass;