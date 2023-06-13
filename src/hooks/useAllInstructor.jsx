import { useEffect, useState } from "react";


const useAllInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('https://sports-academic-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
               const users =  data.filter(user => user.role === 'instructor');
               setInstructor(users)
            })
    }, [])
    return [instructor]
};

export default useAllInstructor;