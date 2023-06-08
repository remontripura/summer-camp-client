import { useEffect, useState } from "react";

const Instructor = () => {
    const [instructor, setInstructor] = useState([]);
    console.log(instructor)
    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])
    return (
        <div className="my-8">
            
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
                                    <td><img className="w-14 rounded-full" src={item.image} alt="" /></td>
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