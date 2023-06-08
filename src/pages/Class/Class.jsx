import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import Title from "../../components/Title";


const Class = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
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