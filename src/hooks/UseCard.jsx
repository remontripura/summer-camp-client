import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from './useAxiosSecure';



const useCard = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: data = [] } = useQuery({
        queryKey: ['select', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/select?email=${user?.email}`)
            return response.data;
        },

    })
    return [refetch, data]
};

export default useCard;