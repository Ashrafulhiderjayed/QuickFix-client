import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import { IoCarSportSharp } from "react-icons/io5";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });
    return (
        <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                <span>Hi, Welcome </span>
                {user?.displayName ? user.displayName : 'Back'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Revenue Stat */}
                <div className="stat p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="stat-figure text-green-500">
                        <FaDollarSign className="text-4xl" />
                    </div>
                    <div className="stat-title text-gray-500">Revenue</div>
                    <div className="stat-value text-2xl font-bold text-gray-800">${stats.revenue}</div>
                    <div className="stat-desc text-gray-400">Jan 1st - Feb 1st</div>
                </div>

                {/* Users Stat */}
                <div className="stat p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="stat-figure text-blue-500">
                        <FaUsers className="text-4xl" />
                    </div>
                    <div className="stat-title text-gray-500">Users</div>
                    <div className="stat-value text-2xl font-bold text-gray-800">{stats.users}</div>
                    <div className="stat-desc text-green-500">↗︎ 400 (22%)</div>
                </div>

                {/* Menu Items Stat */}
                <div className="stat p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="stat-figure text-yellow-500">
                        <IoCarSportSharp className="text-4xl" />
                    </div>
                    <div className="stat-title text-gray-500">Shop Items</div>
                    <div className="stat-value text-2xl font-bold text-gray-800">{stats.shopItems}</div>
                    <div className="stat-desc text-green-500">↗︎ 400 (22%)</div>
                </div>

                {/* Orders Stat */}
                <div className="stat p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="stat-figure text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title text-gray-500">Orders</div>
                    <div className="stat-value text-2xl font-bold text-gray-800">{stats.orders}</div>
                    <div className="stat-desc text-red-500">↘︎ 90 (14%)</div>
                </div>
            </div>
        </section>

    );
};

export default AdminHome;