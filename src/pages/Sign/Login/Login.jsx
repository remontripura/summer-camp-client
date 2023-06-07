import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="w-1/2 mx-auto mt-40">
            <h2 className="font-bold text-center text-3xl text-[#D11F18]">Login</h2>
            <form className="w-3/4 mx-auto space-y-5">
                {/* Email Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" className="px-2 py-3 border-2" />
                </div>

                {/* Email Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" className="px-2 py-3 border-2" />
                </div>
                <input className="btn btn-block bg-[#ce4a46] hover:bg-[#D11F18] font-semibold" type="submit" value="Log In" />
                <p className="text-center">Don't have Account? <Link className="text-sky-600">Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;