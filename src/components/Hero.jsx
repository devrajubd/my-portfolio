import React from "react";
import HeroImage from "../assets/heroImg.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16" id="home">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl">
        I'm{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
          MD. Raju Hossain
        </span>{" "}
        Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-400 font-semibold">
        I specialize in building modern and responsive web aplications.
      </p>
      <div className="flex items-center sm:flex-row flex-col justify-center gap-4 mt-6">
        <a href="#contact">
          <button className="bg-gradient-to-r from-cyan-400 to-violet-600 font-semibold hover:bg-gradient-to-t  px-6 py-2 rounded-full">
            Contact With Me
          </button>
        </a>
        <a
          href="assets/rajucv.pdf"
          target="_blank"
          download="Raju_Hossain_CV.pdf"
        >
          <button className="bg-gradient-to-r from-yellow-400 to-pink-600 font-semibold hover:bg-gradient-to-t px-6 py-2 rounded-full">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
