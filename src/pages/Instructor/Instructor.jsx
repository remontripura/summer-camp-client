
import Title from "../../components/Title";
import { Helmet } from "react-helmet-async";
import useAllInstructor from "../../hooks/useAllInstructor";

const Instructor = () => {
   const [instructor] = useAllInstructor();
    return (
        <div className="my-8">
            <Helmet>
                <title>Wolves | instructor</title>
            </Helmet>
            <Title title="Instractor"></Title>
            <div>
                <div className="overflow-x-auto w-8/12 my-10 mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                instructor.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td><img className="w-12 rounded-full" src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Instructor;