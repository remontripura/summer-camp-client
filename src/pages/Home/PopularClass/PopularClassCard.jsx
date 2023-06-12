

const PopularClassCard = ({item}) => {
    const {image, name, instructor_name, sheet, price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-semibold">Instructor:</span> {instructor_name}</p>
                <p><span className="font-semibold">Available:</span> {sheet}</p>
                <p><span className="font-semibold">Course Fee:</span>${price}/month</p>
            </div>
        </div>
    );
};

export default PopularClassCard;