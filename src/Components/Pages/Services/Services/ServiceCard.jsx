import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const { img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 py-5">
              <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{title}</h2>
              <div className="card-actions  flex flex-row justify-between">
              <p  className="text-red-700 font-bold">Price:$ {price}</p>
              
                <Link to={`/checkout/${title}`} state={service}>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
    );
};

export default ServiceCard;