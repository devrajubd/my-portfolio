import React from "react";
import AboutImage from "../assets/heroImg.jpg";
import { useContext } from "react";
import { StoreContext } from "../contextApi/Store";
const About = () => {
  const { skiils } = useContext(StoreContext);
  return (
    <div className="block bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 lg:px-16">
        <h1 className="text-center text-4xl font-bold mb-12">About</h1>
        <div className="flex items-center flex-col lg:flex-row md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="
          w-72 h-80 rounded object-cover mb-8 lg:mb-0
          
          "
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-300">
              🚀 Web Development & 2D Animation Drawing Videos Services 🎨
              Welcome to my Protfolio Website ! I'm Raju, a passionate
              full-stack web developer and skilled 2D animator. With 3 years of
              experience in these dynamic fields, I offer a unique blend of
              creativity and technical expertise to bring your digital visions
              to life. Experienced full-stack web developer specializing in
              crafting responsive and dynamic websites. Proficient in front-end
              technologies like{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 font-semibold">
                {" "}
                HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, jQuery and React
                JS as well as back-end such as SQL, MySQL Database, NoSQL,
                MongoDB Database, Node js and Express js{" "}
              </span>
            </p>
            <div className="mt-4">
              {skiils.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="lg:flex items-center block mt-3 lg:mt-1"
                  >
                    <label htmlFor="htmlcss" className="w-2/12 font-bold">
                      {skill.name}
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        style={{ width: skill.parent }}
                        className={`bg-gradient-to-r from-cyan-400 to-violet-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 flex justify-between items-center text-center">
              <div>
                <div className="">
                  <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-cyan-400 to-violet-500 font-bold text-3xl">
                    3+
                  </h1>
                  <h3 className="font-semibold">Years of Experience</h3>
                </div>
              </div>
              <div>
                <div className="">
                  <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-cyan-400 to-violet-500 font-bold text-3xl">
                    28+
                  </h1>
                  <h3 className="font-semibold">Projects Compelete</h3>
                </div>
              </div>
              <div>
                <div className="">
                  <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-cyan-400 to-violet-500 font-bold text-3xl">
                    25+
                  </h1>
                  <h3 className="font-semibold">Happy Clients</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
