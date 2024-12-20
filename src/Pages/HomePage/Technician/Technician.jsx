import './Technician.css';
import { FaShoppingCart } from "react-icons/fa";
import technician1 from '/src/assets/img/professional.jpg';
import technician2 from '/src/assets/img/r2.jpg';
import technician3 from '/src/assets/img/technitian1.jpeg';
import Title from '../../../Components/Title/Title';
// import { useContext } from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../providers/AuthProvider';
// import useCart from '../../../hooks/useCart';

const Technician = () => {
    // const { user } = useContext(AuthContext);
    // const [, refetch] = useCart();
    // const navigate = useNavigate();
    const technicians = [
        {
            Experience: '3 years',
            name: 'John Doe',
            skill: 'Tire Repair',
            Contact: '+604282931',
            price: 50,
            img: technician1,
            location: 'Sydney'
        },
        {
            Experience: '5 years',
            name: 'Jane Smith',
            skill: 'Engine oil change',
            Contact: '+604282931',
            price: 60,
            img: technician2,
            location: 'Brisbane'
        },
        {
            Experience: '2 years',
            name: 'Alex Johnson',
            skill: 'Break Repair',
            Contact: '+604282931',
            price: 70,
            img: technician3,
            location: 'Melbourne'
        }
    ];

    const handleAddToCart = (item) => {
        // const { name, Experience, skill, Contact, price, img, location, _id } = item;
        // if (user && user.email) {
        //     const cartItem = { menuItemId: name, Experience, skill, Contact, price, img, location, _id, email: user.email }
        //     fetch('https://quick-fix-server-wine.vercel.app/carts', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(cartItem)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.insertedId) {
        //                 Swal.fire({
        //                     title: "Techinitian Added",
        //                     text: "Successfully",
        //                     icon: "success"
        //                 });
        //                 refetch(); // refetch cart to update the number of items in the cart
        //             }
        //         })
        // }
        // else {
        //     Swal.fire({
        //         title: "Please login First",
        //         icon: "warning",
        //         showCancelButton: true,
        //         confirmButtonColor: "#3085d6",
        //         cancelButtonColor: "#d33",
        //         confirmButtonText: "Login now"
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             // navigate('/login')
        //             navigate('/')
        //         }
        //     });
        // }
    };

    return (
        <div className="w-full mx-auto max-w-screen-xl">
            <div className="lg:pl-96 mt-48 m-24">
                <Title className="text-center" text="WE SOLVE PROBLEMS" />
                <h2 className="text-2xl lg:text-6xl font-bold">
                    Our <br /> Technicians
                </h2>
            </div>
            <section className="container lg:py-10 w-full flex md:flex-row sm:flex-col items-center justify-between">
                {technicians.map((technician, index) => (
                    <div key={index} className="student-card h-1/3 w-80 rounded-xl drop-shadow-2xl">
                        <div className='title'>
                            {/* <h1>Street Photography</h1> */}
                            {/* <p>Kazir Dewri, Chattogram, Bangladesh</p> */}
                        </div>
                        <div className="image">
                            <div className="outer">
                                {/* <div className="inner student-card-img3"> */}
                                <div className="inner bg-black" >
                                    <img src={technician.img} className='h-auto w-1/2 mt-5'></img>
                                </div>
                            </div>
                        </div>
                        <div className="name">
                            {technician.name}
                        </div>
                        <div className="details bg-primary text-white">
                            <div className="col ms-6">
                                <ul type='none'>
                                    <li><span className='font-bold'>Expertise: </span>{technician.skill}</li>
                                    <li><span className='font-bold'>Experience: </span>{technician.Experience}</li>
                                    <li><span className='font-bold'>Price: </span>{technician.price}</li>
                                    <li><span className='font-bold'>Contact: </span>{technician.Contact}</li>
                                </ul>
                                <button className='btn-btn-primary  w-full text-center my-4 text-yellow-400 font-bold flex justify-center items-center gap-2'>Book Now<FaShoppingCart /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Technician;
