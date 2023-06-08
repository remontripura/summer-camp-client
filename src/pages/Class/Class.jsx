import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";


const Class = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <>
        <h2 className="text">All Class</h2>
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