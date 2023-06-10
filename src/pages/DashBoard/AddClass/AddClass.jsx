import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState();
    const onSubmit = data => {

    }
    return (
        <div>
            <h2 className="font-bold text-center text-3xl text-[#D11F18]">Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto grid lg:grid-cols-2 mt-10 gap-5">
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
                    <input type="text" {...register("photo", { required: true })} placeholder="Photo Url" className="px-2 py-3 border-2" />
                    {errors.photo && <span className="text-red-500">Photo Url field is required</span>}
                </div>

                {/* Email Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} defaultValue={user.email} readOnly className="px-2 py-3 border-2" />
                    {errors.email && <span className="text-red-500">email field is required</span>}
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" {...register("instructor_name")} defaultValue={user.displayName} readOnly className="px-2 py-3 border-2" />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" {...register("price")} placeholder="Price" className="px-2 py-3 border-2" />
                </div>

                {/* Available Sheet */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Sheet</span>
                    </label>
                    <input type="number" {...register("sheet")} placeholder="Available Sheet" className="px-2 py-3 border-2" />
                </div>


                <input className="btn btn-block bg-[#ce4a46] hover:bg-[#D11F18] font-semibold" type="submit" value="Sign Up" />

                <p className="text-red-500">{error}</p>
                <p className="text-center">Already have an Account? <Link to="/login" className="text-sky-600">Log In</Link></p>
            </form>
        </div>
    );
};

export default AddClass;