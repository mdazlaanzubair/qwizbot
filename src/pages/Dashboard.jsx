import { useState } from "react";
import ServiceCard from "../components/dashboard/ServiceCard";
import servicesList from "../helpers/constant/services";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen p-5 rounded-lg">
      <div className="grid grid-cols mb-5">
        <div className="flex flex-row items-center justify-center">
          <div className="flex grow m-3">
            <h1 className="text-2xl font-bold grow">Filters</h1>
          </div>
          <div className="flex shrink m-3">
            <input
              type="text"
              placeholder="Realtime search..."
              className="input input-sm input-ghost rounded-none border-0 border-b-2 focus:border-opacity-5 focus:border-neutral-focus focus:outline-none focus:bg-transparent transition-colors ease-in-out duration-500"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {servicesList
          ?.filter((service) => {
            return search.toLowerCase() === ""
              ? service
              : service.title.toLowerCase().includes(search.toLowerCase()) ||
                  service.desc.toLowerCase().includes(search.toLowerCase());
          })
          .map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
