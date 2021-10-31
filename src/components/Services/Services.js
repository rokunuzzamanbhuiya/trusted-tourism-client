import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  // Loading Data
  useEffect(() => {
    fetch("https://grim-plague-97103.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <section id="service-id" className="mt-5 container">
      <h5 className="text-center fw-bolder">Most Popular Tours</h5>
      <h1 className="text-center fw-bolder">
        Our <span style={{ color: "#fe8c01" }}>Tours</span>
      </h1>
      <p className="text-center mb-5">
        To contribute to positive change and achieve our <br /> sustainability
        goals with many extraordinary
      </p>

      {/* render services from server side */}
      <div className="row">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
