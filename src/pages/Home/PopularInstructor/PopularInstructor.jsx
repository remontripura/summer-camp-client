import Title from "../../../components/Title";
import useAllInstructor from "../../../hooks/useAllInstructor";



const PopularInstructor = () => {
    const [instructor] = useAllInstructor();
    const popularSixInstructor = instructor.slice(0, 6)
    return (
        <div>
            <Title title="top Instructor"></Title>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    popularSixInstructor?.length && instructor.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-80 rounded" src={item.image} alt="" /></figure>
                        <div className="card-body">
                            <p><span className="font-semibold text-red-500">Instructor Name: </span>{item.name}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;