import { Link } from "react-router-dom";


const Navbar = () => {
    const navItem = <>
        <li><Link to="/">Home</Link></li>
    </>
    return (
        <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <Link to="/"><img className="w-10" src="https://i.ibb.co/3N7M5Ks/logo.png" alt="" /></Link>
            </div>
            <div className="navbar-end lg:flex ">
            <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <ul className="menu menu-horizontal lg:flex hidden px-1">
                    {navItem}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;