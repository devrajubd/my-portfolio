import React, { useContext, useState } from "react";
import { StoreContext } from "../contextApi/Store";

const Project = () => {
  const { Projects } = useContext(StoreContext);
  const [openImg, setOpenImg] = useState(null);
  return (
    <div className="block bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 lg:px-16">
        <h1 className="text-center text-4xl font-bold mb-12">Projects</h1>
        <div className="flex items-center justify-evenly flex-wrap gap-8">
          {Projects.map((project, index) => {
            return (
              <div key={index} className="bg-gray-800 p-6 md:w-80 rounded-lg">
                <img
                  className="transform transition-transform hover:scale-150 rounded cursor-zoom-in duration-500 object-cover"
                  src={project.image}
                  alt=""
                  onClick={() => setOpenImg("")}
                  style={{ width: openImg }}
                />
                <h1 className="text-2xl font-bold my-3">{project.name}</h1>
                <p className="my-2 font-semibold text-gray-400">
                  {project.buildAt}
                </p>
                <button className="bg-gradient-to-r from-yellow-400 to-pink-600 font-semibold hover:bg-gradient-to-t  px-6 py-1 rounded-full">
                  Github
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
