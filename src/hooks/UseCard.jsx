import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useCard = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: data = [] } = useQuery({
        queryKey: ['select', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/select?email=${user?.email}`)
            return response.json();
        },

    })
    return [data, isLoading]
};

export default useCard;