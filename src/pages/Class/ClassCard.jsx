import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";
import { useState } from "react";



const ClassCard = ({ item }) => {
    const { image, name, instructor_name, sheet, price, _id } = item;

    const [isInstructor] = useInstructor()
    const [isAdmin] = useAdmin();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [disabled, setDisable] = useState(true)

    if (isAdmin && isInstructor) {
        setDisable(true)
    }

    const handleSelect = item => {
        const { image, name, instructor_name, sheet, price, _id } = item;
        if (user && user.email) {
            const orderItem = { menuItemId: _id, image, name, instructor_name, sheet, price, email: user.email }
            fetch('https://sports-academic-server.vercel.app/select', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
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
        else {
            Swal.fire({
                title: 'Please Login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            })
        }
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-52 rounded-sm" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-semibold">Instructor:</span> {instructor_name}</p>
                <p><span className="font-semibold">Available:</span> {sheet}</p>
                <p><span className="font-semibold">Course Fee:</span>${price}/Month</p>
                <div className="card-actions justify-start">
                    {
                        isAdmin || isInstructor ? <></> :
                            <button onClick={() => handleSelect(item)} className="rounded px-5 py-2 bg-[#D11F18] hover:bg-[#97110c] text-white">Select</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassCard;