import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://quick-fix-server-wine.vercel.app' // Replace with your API endpoint
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;