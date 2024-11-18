import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";

const MyAppointments = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: appointments = [] } = useQuery({
        queryKey: ['appointments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/appointments/${user.email}`)
            return res.data;
        }
    })

    // Function to determine the badge class based on the appointment date
    const getDateClass = (dateString) => {
        const appointmentDate = new Date(dateString);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set today's time to midnight for comparison

        if (appointmentDate.toDateString() === today.toDateString()) {
            return 'badge-success'; // Today's date (green badge)
        } else if (appointmentDate < today) {
            return 'badge-error'; // Previous date (red badge)
        } else {
            return 'badge-warning'; // Upcoming date (yellow badge)
        }
    };

    return (
        <section>
            <h1 className="text-center text-4xl">My Appointments</h1>
            <div className="mx-auto max-w-7xl p-8">
                <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-800 my-4">
                    Total Appointments: <span className="text-mainColor">{appointments.length}</span>
                </h2>


                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => <tr key={index}>
                                <th>
                                    <p className="text-yellow-500 font-semibold">{index + 1}.</p>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={appointment?.img}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">Customer</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {appointment?.phone}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{appointment?.email}</span>
                                </td>
                                <td>
                                    <div className={`badge ${getDateClass(appointment?.date)}`}>
                                        {appointment?.date}
                                    </div>
                                </td>
                                <td>{appointment?.time}</td>
                                <td>{appointment?.appointment}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default MyAppointments;