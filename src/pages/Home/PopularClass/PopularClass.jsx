import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";
import UseClass from "../../../hooks/UseClass";


const PopularClass = () => {
 const [classes] = UseClass();
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                classes.map(item => <PopularClassCard
                key={item._id}
                item={item}
                ></PopularClassCard>)
            }
        </div>
    );
};

export default PopularClass;