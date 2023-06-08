import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";


const PopularClass = () => {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        fetch('class.json')
        .then(res => res.json())
        .then(data => setPopular(data))
    }, [])
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                popular.map(item => <PopularClassCard
                key={item._id}
                item={item}
                ></PopularClassCard>)
            }
        </div>
    );
};

export default PopularClass;