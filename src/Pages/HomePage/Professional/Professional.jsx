import { NavLink } from 'react-router-dom';
import professional from '../../../assets/Professional/professional.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { GiAutoRepair } from 'react-icons/gi';
import { MdOutlineTireRepair } from 'react-icons/md';
import { MdCarRepair } from 'react-icons/md';
import './Professional.css';
import AOS from 'aos';
import Title from '../../../Components/Title/Title';

const Professional = () => {
  return (
    <section className="flex flex-col lg:flex-row my-10 lg:my-32 mx-auto max-w-screen-xl">
      {/* Left div */}
      <div className="lg:flex-1 relative order-2 lg:order-1 mt-5">
        <img src={professional} alt="" />
        <div id="horizontally-align-text" className="flex justify-evenly absolute w-5/6 -mt-14 ml-10 p-2 bg-mainColor parallelogram">
          <div className="parallelogram1">
            <MdCarRepair className="text-4xl lg:text-6xl text-white" />{' '}
            <h4 className="text-white text-xs lg:text-sm font-bold">
              Certified <br />Repair
            </h4>
          </div>
          <div className="parallelogram1">
            <GiAutoRepair className="text-4xl lg:text-6xl text-white" />{' '}
            <h4 className="text-white text-xs lg:text-sm font-bold">
              Certified <br />  Service
            </h4>
          </div>
          <div className="parallelogram1">
            <MdOutlineTireRepair className="text-4xl lg:text-6xl text-white" />{' '}
            <h4 className="text-white text-xs lg:text-sm font-bold">
              Auto <br /> Repair
            </h4>
          </div>
        </div>
      </div>
      {/* Right div */}
      <div className="lg:flex-1 pl-5 order-1 lg:order-2 mt-12">
        {/* <div className="lg:flex-1 pl-5 order-1 lg:order-2 bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] text-white"> */}
        <Title text="CAR SERVICES WITH YOU IN MIND"></Title>
        <h2 className="text-2xl lg:text-6xl font-bold">
          WE ARE A PROFESSIONAL AUTO REPAIR SERVICE
        </h2>
        <p className="my-8 text-justify">
          QuickFix Motors is a well-established auto repair shop in Sydney, Brisbane, Parth.
          Our company offers car maintenance to major repairs since 1971. We are
          a company that has built its reputation on reliable services for all
          times of vehicles in Sydney, Australia.
        </p>
        <NavLink className="flex items-center">
          MORE ABOUT US <FaArrowRight className="inline ml-2" data-aos="fade-left" data-aos-delay="10" />{' '}
        </NavLink>
      </div>
    </section>
  );
};

export default Professional;