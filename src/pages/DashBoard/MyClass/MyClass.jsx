import useCard from "../../../hooks/UseCard";


const MyClass = () => {
    const [data] = useCard();
    return (
        <div className='w-full'>
            <h2>{data.length}</h2>
        </div>
    );
};

export default MyClass;