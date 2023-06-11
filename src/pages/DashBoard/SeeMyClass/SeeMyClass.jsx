import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Title from "../../../components/Title";
import { Link } from "react-router-dom";

const SeeMyClass = () => {
    const { user } = useAuth([]);
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['clssses'], async () => {
        const res = await axiosSecure.get('/class')
        return res.data;
    })
    const instructorClass = classes.filter(ic => ic.email === user.email);
    return (
        <div>
            <Title title="My Class"></Title>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Total Enroled</th>
                            <th>FeedBack</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorClass.map(iclass => <tr key={iclass._id}>
                                <td><img className="rounded w-16" src={iclass.image} alt="" /></td>
                                <td>{iclass.name}</td>
                                <td>${iclass.price}</td>
                                <td></td>
                                <td><button className="hover:text-[#D11F18]">feedBack</button></td>
                                <td><Link to={`/dashboard/seeclass/${iclass._id}`}><button className="hover:text-[#D11F18]">update</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SeeMyClass;