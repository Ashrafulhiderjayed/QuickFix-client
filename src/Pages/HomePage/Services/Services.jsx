import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import Title from "../../../Components/Title/Title";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const Services = () => {
    const [services, setServices] = useState([]);
    const axiosPublic = useAxiosPublic();

    const fetchServices = async () => {
        try {
            const res = await axiosPublic.get('/services');
            setServices(res.data);
        } catch (error) {
            console.error('Error fetching services:', error);
            // Handle error appropriately (e.g., set an error state)
        }
    };
    // Fetch services on component mount or when service data changes
    useEffect(() => {
        fetchServices();
    }, []);
    return (
        <section className="lg:my-32 mx-auto max-w-screen-xl">
            <div className="lg:pl-96 mt-48 m-24">
                <Title className="text-center" text="WHAT WE DO"></Title>
                <h2 className="text-2xl lg:text-6xl font-bold">Our <br /> Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                services.map(service =><ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)
            }
            </div>
        </section>
    );
};

export default Services;