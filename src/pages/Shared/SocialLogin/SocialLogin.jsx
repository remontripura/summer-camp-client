import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
    const { googleSighIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSighIn()
            .then(result => {
                const loggedUser = result.user;
                const userDetails = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL }
                fetch('http://localhost:5000/users', {
                    method: 'POSt',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userDetails)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })




            })
            .catch(error => {

            })
    }


    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn btn-block"><FaGoogle className="text-2xl" /></button>
        </div>
    );
};

export default SocialLogin;