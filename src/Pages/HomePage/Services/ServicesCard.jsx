import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {
    const {_id, title, img, description} = service;
  return (
    <section className="card card-compact w-96 bg-base-100 hover:drop-shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold">{title}</h2>
        <p className='text-justify'>{description}</p>
        <div className="card-actions">
            <Link to={`/service/${_id}`} className="text-teal-600 font-bold">
                Book Now <FaArrowRight className="inline ml-2" />{' '}
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;








