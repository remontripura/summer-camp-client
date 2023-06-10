import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useCard = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const { refetch, data: data = [] } = useQuery({
        queryKey: ['select', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/select?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        },

    })
    return [refetch, data]
};

export default useCard;