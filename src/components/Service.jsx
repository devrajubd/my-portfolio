import React, { useContext } from "react";
import { StoreContext } from "../contextApi/Store";

const Service = () => {
  const { Services } = useContext(StoreContext);
  return (
    <div className="block bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 lg:px-16">
        <h1 className="text-center text-4xl font-bold mb-12">Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7">
          {Services.map((service, index) => {
            return (
              <div
                key={index}
                className="bg-gray-800 cursor-pointer px-6 pb-4 rounded-lg transform transition-transform duration-300 hover:scale-110"
              >
                <strong className="text-slate-300 text-xl float-right mt-2 ">
                  {service.id}
                </strong>
                <h1 className=" pt-10 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                  {service.name}
                </h1>
                <p className="py-3 font-semibold text-gray-200">
                  {service.desc}
                </p>
                <button className="text-cyan-400 font-semibold">
                  Read More...
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
