import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useMenu = () =>{
    const axiosPublic = useAxiosPublic();

    const {data: menu=[], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const response = await axiosPublic.get('/shop');
            return response.data;
        }
    })
    return [menu, loading, refetch];

}
export default useMenu;
