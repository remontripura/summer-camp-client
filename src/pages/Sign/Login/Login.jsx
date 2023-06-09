import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";


const Login = () => {
    const { register, handleSubmit, reset } = useForm();

    const {logIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        logIn(data.email, data.password)
        .then(result => {
            const loggedUser = result.user
            reset();
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Login Succesfull',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, { replace: true });
        })
    };
    return (
        <div className="w-1/2 mx-auto mt-40">
            <h2 className="font-bold text-center text-3xl text-[#D11F18]">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto space-y-5">
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
                <input className="btn btn-block bg-[#ce4a46] hover:bg-[#D11F18] font-semibold" type="submit" value="Log In" />
                <p className="text-center">Don't have Account? <Link to="/registration" className="text-sky-600">Sign Up</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;