import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000' // Replace with your API endpoint
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;