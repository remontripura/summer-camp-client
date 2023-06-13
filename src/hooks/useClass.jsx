import { useEffect, useState } from "react";


const UseClass = () => {
    const [classes, setClass] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://sports-academic-server.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                setClass(data);
                setLoading(false);
            });
    }, [])

    return [classes, loading]
};

export default UseClass;