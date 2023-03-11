import { Link } from "react-router-dom";

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className={`card border border-neutral-focus border-opacity-5 hover:bg-neutral hover:text-neutral-content hover:shadow-xl hover:shadow-neutral transition-all ease-in-out duration-300 ${
        service.url !== "/qna" ? "blur-sm" : ""
      }`}
    >
      <div className="card-head text-center pt-5">
        <div className="avatar placeholder">
          <div className="bg-base-300 text-base-content rounded-full w-12">
            <span>{index + 1}</span>
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
          {service.url === "/qna" ? (
            <Link to={service?.url} className="btn btn-sm btn-ghost">
              Try it out!
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
