import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import UseClass from "../../../hooks/UseClass";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const [classes] = UseClass();
    const [axiosSecure] = useAxiosSecure();
    const { data: classed = [], refetch } = useQuery(['classed'], async () => {
        const res = await axiosSecure.get('/class')
        return res.data;
    })

    const handleApproved = allclass => {
      console.log(allclass)
      fetch(`https://sports-academic-server.vercel.app/user/class/${allclass._id}`, {
          method: 'PATCH'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
          // if(data.modifiedCount){
          //     refetch();
          //     Swal.fire({
          //         position: 'top',
          //         icon: 'success',
          //         title: 'Made Admin Successfully',
          //         showConfirmButton: false,
          //         timer: 1500
          //       })
          // }
      })
  }


    return (
        <div>
            <Title title="manage all classes"></Title>
            <div className="grid lg:grid-cols-2">
                {
                    classes.map(allclass => <div key={allclass._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-60" src={allclass.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <p className="text-[18px]"><span className="font-semibold">Sports Name: </span>{allclass.name}</p>
                      <div className="flex">
                        <p><span className="font-semibold text-red-600">price: </span>${allclass.price}/month</p>
                        <p><span>Sheet:</span>{allclass.sheet}</p>
                      </div>
                      <p><span>Instructor Name:</span>{allclass.instructor_name}</p>
                      <p><span>Instructor Email:</span>{allclass.email}</p>
                    <div className="flex gap-5">
                        {
                          allclass.status === 'approved' ? 'Approved' :
                          <button onClick={() => handleApproved(allclass)} className="px-3 py-1 bg-[#D11F18] text-white rounded">Approve</button>
                        }
                        <button className="px-3 py-1 bg-[#D11F18] text-white rounded">Deny</button>
                        <button className="px-3 py-1 bg-[#D11F18] text-white rounded">Send Feedback</button>
                    </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;