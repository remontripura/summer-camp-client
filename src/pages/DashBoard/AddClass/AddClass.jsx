import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        const { name, email, instructor_name, price, sheet, image } = data;
        const classItem = { name, email, instructor_name, price: parseFloat(price), sheet: parseFloat(sheet), image }
        axiosSecure.post('/class', classItem)
            .then(data => {
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'New class added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

return (
    <div>
        <h2 className="font-bold text-center text-3xl text-[#D11F18]">Add a New Class</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10">
            <div className=" grid lg:grid-cols-2 gap-5">
                {/* Naming Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Class Name" className="px-2 py-3 border-2" />
                    {errors.name && <span className="text-red-500">Name field is required</span>}
                </div>

                {/* Photo Url Form */}
                <div className="form-control m-0">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" {...register("image", { required: true })} placeholder="Image" className="px-2 py-3 border-2" />
                    {errors.photo && <span className="text-red-500">Photo Url field is empty</span>}
                </div>

                {/* Instructor Email Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} defaultValue={user.email} readOnly className="px-2 py-3 border-2" />
                    {errors.email && <span className="text-red-500">email field is empty</span>}
                </div>

                {/* Instructor Name Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" {...register("instructor_name")} defaultValue={user.displayName} readOnly className="px-2 py-3 border-2" />
                </div>

                {/* Price Form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" {...register("price")} placeholder="Price" className="px-2 py-3 border-2" />
                </div>

                {/* Available Sheet form */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Sheet</span>
                    </label>
                    <input type="number" {...register("sheet")} placeholder="Available Sheet" className="px-2 py-3 border-2" />
                </div>
            </div>


            <input className="btn btn-block bg-[#ce4a46] hover:bg-[#D11F18] font-semibold mt-10" type="submit" value="Add New Class" />
        </form>
    </div>
);
};

export default AddClass;