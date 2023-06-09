import { useEffect, useState } from "react";


const UseClass = () => {
       const [classes, setClass] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setClass(data);
                setLoading(false);
            });
    }, [])

    return [classes, loading]
};

export default UseClass;