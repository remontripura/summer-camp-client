

const ClassCard = ({ item }) => {
    const { image, name, instructorName, available, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-semibold">Instructor:</span> {instructorName}</p>
                <p><span className="font-semibold">Available:</span> {available}</p>
                <p><span className="font-semibold">Course Fee:</span>${price}</p>
                <div className="card-actions justify-start">
                    <button className="rounded px-5 py-2 bg-[#D11F18] hover:bg-[#97110c] text-white">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;