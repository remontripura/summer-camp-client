import { Link, Outlet } from "react-router-dom";
import Title from "../components/Title";
import useCard from "../hooks/useCard";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Dashboard = () => {


    // TODO
    const isAdmin = true;

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer mt-10 lg:drawer-open drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mx-10 pt-5 px-10 bg-slate-200"> {/*justify-center items-center*/}
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-red-100 text-base-content">
                        {
                            isAdmin ?
                                <>
                                    <li><Link to="/dashboard/mclasses">Manage Classes</Link></li>
                                    <li><Link to="/dashboard/allusers">All Users</Link></li>
                                </> :
                                <>
                                    <li><Link to="/dashboard/myclass">My Selected Classes</Link></li>
                                    <li><Link to="/dashboard/enrolled">My Enrolled Classes</Link></li>
                                </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;