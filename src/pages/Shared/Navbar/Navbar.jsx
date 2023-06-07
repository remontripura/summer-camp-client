import { Link } from "react-router-dom";


const Navbar = () => {
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/class">Classes</Link></li>
    </>
    return (
        <div className="navbar font-semibold uppercase bg-[#373737] text-white">
            <div className="navbar-start">
                <Link to="/"><img className="w-14" src="https://i.ibb.co/3N7M5Ks/logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center lg:flex ">
                <ul className="menu menu-horizontal lg:flex hidden px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end lg:flex ">
                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#373737] text-white">
                        {navItem}
                    </ul>
                </div>
                <div>
                    <Link to="/login"><button className="mx-5 px-5 py-2 bg-[#D11F18] text-white">Login</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;