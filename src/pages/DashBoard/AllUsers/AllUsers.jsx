import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`https://sports-academic-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Made Admin Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user => {
        fetch(`https://sports-academic-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Made Instructor Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Wolves | all users</title>
            </Helmet>
            <h3 className="3xl font-semibold">Total Users: {users.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? <button disabled className="btn btn-error">Admin</button> :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-error">Admin</button>}
                                    </td>
                                    <td>
                                        {user.role === 'instructor' ? <button disabled className="btn btn-error">Instructor</button> :
                                            <button onClick={() => handleMakeInstructor(user)} className="btn btn-error">Instructor</button>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;