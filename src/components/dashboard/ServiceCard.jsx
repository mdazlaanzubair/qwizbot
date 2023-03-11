import { Link } from "react-router-dom";
import * as FontAwesome from "react-icons/fa";
import React from "react";

const ServiceCard = ({ service }) => {
  const icon = React.createElement(
    FontAwesome[service.icon]
  );

  return (
    <div className="card border border-neutral-focus border-opacity-5 hover:bg-neutral hover:text-neutral-content hover:shadow-xl hover:shadow-neutral transition-all ease-in-out duration-300">
      <div className="card-head text-center pt-5">
        <div className="avatar placeholder">
          <div className="border-2 border-primary text-primary-focus rounded-full p-5">
            <span className="text-4xl">{icon}</span>
          </div>
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title capitalize font-bold">{service.title}</h2>
        <p className="font-light">{service.desc}</p>
        <p>
          {service.tags.map((tag, index) => (
            <span key={index} className="text-primary text-sm">
              #{tag + " "}
            </span>
          ))}
        </p>
        <div className="card-actions justify-end">
          <Link to={service?.url} className="btn btn-sm btn-link normal-case">
            Try me out!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
