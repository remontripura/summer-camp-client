import Swal from "sweetalert2";
import useCard from "../../../hooks/UseCard";


const MyClass = () => {
    const [refetch, data] = useCard();
    const total = data.reduce((sum, item) => item.price + sum, 0);


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure to Delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/select/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Deleted Successfull',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className='w-full'>
            <div className="uppercase font-semibold flex justify-between text-2xl bg-white p-2 rounded">
                <h2><span className="text-[#D11F18] mr-3">Total Class:</span>{data.length}</h2>
                <h2><span className="text-[#D11F18] mr-3">Total Fee:</span> ${total}</h2>
                <button className="px-5 pb-1 rounded font-bold bg-[#D11F18] text-white">pay</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>image</th>
                                <th>Sports Name</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => <tr key={item._id}>
                                    <td><img className="w-16 rounded" src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.instructorName}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="px-3 py-1 rounded font-bold bg-[#D11F18] text-white">Delete</button>
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

export default MyClass;