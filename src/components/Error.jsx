import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="w-3/4 mx-auto text-center">
            <img className="w-full" src="https://i.ibb.co/Yd9Gjtq/error-404-01.jpg" alt="" />
            <Link to="/"><button className="btn btn-error mt-10">Back to Home</button></Link>
        </div>
    );
};

export default Error;