import { useEffect, useState } from "react";
import Title from "../../components/Title";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
               const users =  data.filter(user => user.role === 'instructor');
               setInstructor(users)
            })
    }, [])
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