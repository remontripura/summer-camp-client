
import PopularClassCard from "./PopularClassCard";
import UseClass from "../../../hooks/UseClass";
import Title from "../../../components/Title";


const PopularClass = () => {
    const [classes] = UseClass();
    const popularSixClass = classes.slice(0, 6)
    return (
        <div>
            <Title title="top 6 class"></Title>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    popularSixClass?.length && popularSixClass.map(item => <PopularClassCard
                        key={item._id}
                        item={item}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;