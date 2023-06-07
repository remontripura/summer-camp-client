import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
    const { register, handleSubmit, 
         reset, formState: { errors } } = useForm();
    const [error, setError] = useState("");

    const {createUser} = useContext(AuthContext);


    const onSubmit = data => {
        if(data.password !== data.confirm_password){
            return setError("password doesn't match")
        }
        createUser(data.email, data.password)
        .then(result => {
            const newUser = result.user;
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
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
                    <input type="text" {...register("name")} placeholder="Name" className="px-2 py-3 border-2" />
                </div>

                {/* Photo Url Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("photo")} placeholder="Photo Url" className="px-2 py-3 border-2" />
                </div>

                {/* Email Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email")} placeholder="Email" className="px-2 py-3 border-2" />
                </div>

                {/* password Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register("password")} placeholder="Password" className="px-2 py-3 border-2" />
                </div>

               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" {...register("confirm_password")} placeholder="Confirm Password" className="px-2 py-3 border-2" />
                </div>


                <input className="btn btn-block bg-[#ce4a46] hover:bg-[#D11F18] font-semibold" type="submit" value="Sign Up" />

                <p className="text-red-500">{error}</p>
                <p className="text-center">Already have an Account? <Link to="/login" className="text-sky-600">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Registration;