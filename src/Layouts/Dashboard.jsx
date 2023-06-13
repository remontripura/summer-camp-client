import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div>
            <Helmet>
                <title>wolves | deshboard home</title>
            </Helmet>
            <div className="drawer mt-10 lg:drawer-open drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ml-10 pt-5 px-10"> {/*justify-center items-center*/}
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-slate-200 h-full text-base-content">

                        {isAdmin ? (
                            <>
                                <li><NavLink to="/dashboard/allusers">All Users</NavLink></li>
                                <li><NavLink to="/dashboard/manageclass">Manage Classes</NavLink></li>
                            </>
                        ) : (
                            isInstructor ? (
                                <>
                                    <li><NavLink to="/dashboard/addclass">Add Class</NavLink></li>
                                    <li><NavLink to="/dashboard/seeclass">See My Class</NavLink></li>
                                </>
                            ) : (
                                <>
                                    <li><NavLink to="/dashboard/myclass">My Selected Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolled">My Enrolled Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/history">Payment History</NavLink></li>
                                </>
                            )
                        )
                        }


                        <div className="divider"></div>
                        <li><NavLink to="/">Home</NavLink> </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;