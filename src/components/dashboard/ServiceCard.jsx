const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-base-200 text-base-content hover:bg-neutral hover:text-neutral-content hover:shadow-xl hover:shadow-neutral transition-all ease-in-out duration-300">
      <div className="card-body items-center text-center">
        <h2 className="card-title capitalize font-bold">{service.title}</h2>
        <p className="font-light">{service.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-secondary">Try it out!</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
