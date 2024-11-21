
import { Link } from "react-router-dom";
import { BsCart, BsCalendarCheck, BsPersonCircle } from "react-icons/bs";
import useAuth from "../../../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center p-5">
            <div className="flex items-center justify-center gap-3 mb-6">
                <h1 className="text-3xl font-bold text-mainColor">
                    <span className="flex items-center gap-2">
                        <span className="text-4xl">
                            <BsPersonCircle className="text-mainColor" />
                        </span>
                        Welcome to Your Dashboard, {user?.displayName}!
                    </span>
                </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 w-full max-w-6xl">
                {/* Shopping Section */}
                <div className="card bg-white shadow-xl p-6 flex flex-col items-center justify-between">
                    <BsCart className="text-mainColor text-6xl mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Shopping</h2>
                    <p className="text-gray-500 text-center mb-4">
                        Explore our collection of car repair products and accessories tailored to your needs.
                    </p>
                    <Link to="/shop">
                        <button className="btn bg-mainColor text-white hover:bg-black">Go Shopping</button>
                    </Link>
                </div>

                {/* Appointments Section */}
                <div className="card bg-white shadow-xl p-6 flex flex-col items-center justify-between">
                    <BsCalendarCheck className="text-mainColor text-6xl mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Appointments</h2>
                    <p className="text-gray-500 text-center mb-4">
                        View or schedule appointments for car repair and maintenance services.
                    </p>
                    <Link to="/dashboard/myAppointments">
                        <button className="btn bg-mainColor text-white hover:bg-black">Manage Appointments</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
