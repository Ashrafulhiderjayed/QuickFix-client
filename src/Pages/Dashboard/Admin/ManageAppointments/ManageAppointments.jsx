import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
// import appointmentDefaultImg from '../../../assets/img/appointmentDefaultImg.jpg'
import appointmentDefaultImg from '../../../../assets/appointmentDefaultImg.jpg'

const ManageAppointments = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allAppointments = [], refetch } = useQuery({
        queryKey: ['allAppointments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/appointments');

            return res.data;
        }
    })



    const handleDeleteAppointment = (appointment) => {
        // console.log(appointment);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/appointments/${appointment._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Appointment has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <section>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Appointments</h2>
                <h2 className="text-3xl">Total Appointments: {allAppointments?.length}</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Email</th>
                            <th>Vehicle</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allAppointments.map((appointment, index) => <tr key={index}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                {
                                                    (appointment?.img) ? 
                                                    (
                                                        <img
                                                        src={appointment?.img}
                                                        alt="Avatar Tailwind CSS Component" />
                                                    ):
                                                    (
                                                        <img
                                                        src={appointmentDefaultImg}
                                                        alt="Avatar Tailwind CSS Component" />
                                                    )
                                                }
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{appointment?.customerName}</div>
                                            <div className="text-sm opacity-50">{appointment?.phone}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{appointment?.date}</td>
                                <td>{appointment?.time}</td>
                                <td>{appointment?.email}</td>
                                <td>{appointment?.vehicle}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteAppointment(appointment)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageAppointments;