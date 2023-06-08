

const PopularClassCard = ({item}) => {
    const {image, name, instructorName, available, price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-semibold">Instructor:</span> {instructorName}</p>
                <p><span className="font-semibold">Available:</span> {available}</p>
                <p><span className="font-semibold">Course Fee:</span>${price}</p>
            </div>
        </div>
    );
};

export default PopularClassCard;