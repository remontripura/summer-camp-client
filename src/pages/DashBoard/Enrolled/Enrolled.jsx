import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";


const Enrolled = () => {
    const { user } = useAuth([]);
    const [axiosSecure] = useAxiosSecure();
    const { data: myclass = [] } = useQuery(['myclass'], async () => {
        const res = await axiosSecure.get('/payments')
        return res.data;
    })
    const myenrolled = myclass.filter(mycl => mycl.email === user.email);

    return (
        <div>
            <Helmet>
                <title>Wolves | enrolled class</title>
            </Helmet>
            <Title title="my Enrolled class"></Title>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myenrolled.map((iclass, index) => <tr key={iclass._id}>

                                <td>{index + 1}</td>
                                <td><img className="w-16 rounded" src={iclass.image} alt="" /></td>
                                <td>{iclass.email}</td>
                                <td>${iclass.price}</td>
                                <td>{iclass.status}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enrolled;