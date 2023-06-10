import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCard = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: data = [] } = useQuery({
        queryKey: ['select', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/select?email=${user?.email}`)
            return response.data;
        },

    })
    return [refetch, data]
};

export default useCard;