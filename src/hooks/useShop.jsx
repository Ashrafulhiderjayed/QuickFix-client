import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useShop = () =>{
    const axiosPublic = useAxiosPublic();

    const {data: shop=[], isPending: loading, refetch} = useQuery({
        queryKey: ['shop'],
        queryFn: async () => {
            const response = await axiosPublic.get('/shop');
            return response.data;
        }
    })
    return [shop, loading, refetch];

}
export default useShop;
