import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Update = () => {
    const { register, handleSubmit, reset } = useForm();
    const classLoader = useLoaderData();
    const { name, price, sheet, _id, image } = classLoader;

    const [axiosSecure] = useAxiosSecure();
    const update = data => {
        const { name, price, image, sheet } = data;
        const putItem = { name, image, price: parseFloat(price), sheet: parseFloat(sheet) }
        axiosSecure.put(`/class/${_id}`, putItem)
            .then(data => {
                console.log(data)
                if (data.data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'New class updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>Wolves | update</title>
            </Helmet>
            <h2 className="font-bold text-center text-3xl text-[#D11F18]">Update Form</h2>
            <form onSubmit={handleSubmit(update)} className="mx-auto mt-10">
                <div className=" grid lg:grid-cols-2 gap-5">
                    {/* Naming Form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("name")} defaultValue={name} className="px-2 py-3 border-2" />
                    </div>

                    {/* Photo Url Form */}
                    <div className="form-control m-0">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" {...register("image")} defaultValue={image} readOnly className="px-2 py-3 border-2" />
                    </div>

                    {/* Price Form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" {...register("price")} defaultValue={price} className="px-2 py-3 border-2" />
                    </div>

                    {/* Available Sheet form */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Sheet</span>
                        </label>
                        <input type="number" {...register("sheet")} defaultValue={sheet} className="px-2 py-3 border-2" />
                    </div>
                </div>


                <input className="btn btn-block bg-[#ce4a46] hover:bg-[#D11F18] font-semibold mt-10" type="submit" value="Update Class" />
            </form>
        </div>
    );
};

export default Update;