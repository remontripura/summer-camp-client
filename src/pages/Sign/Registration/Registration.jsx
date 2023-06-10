import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Registration = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState("");

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
        if (data.password !== data.confirm_password) {
            return setError("password doesn't match")
        }
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const userDetails = { name: data.name, email: data.email, image: data.photo }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userDetails)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top',
                                        icon: 'success',
                                        title: 'Register Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate("/");
                                }
                            })
                    })
                    .catch((error) => {

                    });
            })
            .catch((error) => {
                setError(error)
            })
    };



    return (
        <div className="w-1/2 mx-auto ">
            <h2 className="font-bold text-center text-3xl text-[#D11F18]">Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto space-y-5">
                {/* Naming Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Name" className="px-2 py-3 border-2" />
                    {errors.name && <span className="text-red-500">Name field is required</span>}
                </div>

                {/* Photo Url Form */}
                <div className="form-control">
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
                    <input type="email" {...register("email", { required: true })} placeholder="Email" className="px-2 py-3 border-2" />
                    {errors.email && <span className="text-red-500">email field is required</span>}
                </div>

                {/* password Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                    })} placeholder="Password" className="px-2 py-3 border-2" />
                    {errors.password?.type === 'required' && <p className="text-red-500">password not required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-500">password must 6 cherecter</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">password must have one uppercase one special charecters</p>}
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" {...register("confirm_password")} placeholder="Confirm Password" className="px-2 py-3 border-2" />
                </div>


                <input className="btn btn-block bg-[#ce4a46] hover:bg-[#D11F18] font-semibold" type="submit" value="Sign Up" />

                <SocialLogin></SocialLogin>

                <p className="text-red-500">{error}</p>
                <p className="text-center">Already have an Account? <Link to="/login" className="text-sky-600">Log In</Link></p>
            </form>
        </div>
    )
}

export default Registration;