import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import Title from "../../components/Title";
import UseClass from "../../hooks/UseClass";


const Class = () => {
    const [classes] = UseClass();
    return (
        <>
        <Title title="All Class"></Title>
            <div className="grid md:grid-cols-3 gap-5 my-10">
                {
                    classes.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
        </>
    );
};

export default Class;