import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-base-300 space-x-5 space-y-5 ">
      <div className="text-center">
        <h2 className=" text-3xl font-bold text-orange-500 uppercase p-5">
          Our services
        </h2>
        <p className="my-4">
          Dark Tech specializes in crafting custom web solutions tailored to
          your needs. From sleek websites to dynamic applications, we harness
          cutting-edge technology to elevate your online presence. Partner with
          us to illuminate your path to digital success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 lg:px-7 px-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
