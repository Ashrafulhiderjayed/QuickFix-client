import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading, isError } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })



    if (isError) {
        return <div>Error loading payments. Please try again later.</div>;
    }

    return (
        <section>
            <h1 className="text-center text-4xl">My Appointments</h1>
            <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-800 my-4">
                Total Appointments: <span className="text-mainColor">{payments?.length}</span>
            </h2>
            <div className="mx-auto max-w-7xl p-8">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-gray-200">
                            <tr>
                                <th>#</th>
                                <th>price</th>
                                <th>Transaction Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="hover">
                            {isLoading ? (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        <span className="loading loading-infinity loading-lg"></span>
                                    </td>
                                </tr>
                            ) : payments.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center text-gray-500">
                                        No data available
                                    </td>
                                </tr>
                            ) : (
                                payments.map((payment, index) => <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>${payment.price}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.status}</td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PaymentHistory;