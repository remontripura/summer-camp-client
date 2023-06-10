import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const ClassCard = ({ item }) => {
    const { image, name, instructorName, available, price, _id } = item;

    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = item => {
        if(user && user.email){
            const orderItem = {menuItemId: _id, image, name, instructorName, available, price, email: user.email}
            fetch('http://localhost:5000/select', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Selected Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate("/login", {state: {from: location}});
                }
              })
        }
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-52 rounded-sm" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-semibold">Instructor:</span> {instructorName}</p>
                <p><span className="font-semibold">Available:</span> {available}</p>
                <p><span className="font-semibold">Course Fee:</span>${price}</p>
                <div className="card-actions justify-start">
                    <button onClick={() => handleSelect(item)} className="rounded px-5 py-2 bg-[#D11F18] hover:bg-[#97110c] text-white">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;