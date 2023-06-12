
import ClassCard from "./ClassCard";
import Title from "../../components/Title";
import UseClass from "../../hooks/UseClass";
import { Helmet } from 'react-helmet-async';


const Class = () => {
    const [classes] = UseClass();
    return (
        <>
            <Helmet>
                <title>Wolves | class</title>
            </Helmet>
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