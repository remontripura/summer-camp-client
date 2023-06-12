
import PopularClassCard from "./PopularClassCard";
import UseClass from "../../../hooks/UseClass";
import Title from "../../../components/Title";


const PopularClass = () => {
    const [classes] = UseClass();
    return (
        <div>
            <Title title="top 6 class"></Title>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    classes?.length && classes.map(item => <PopularClassCard
                        key={item._id}
                        item={item}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;