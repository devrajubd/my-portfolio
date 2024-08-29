import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  const FormValidation = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailMessage("Email is required");
      setIsValid(false);
    } else if (!emailRegex.test(email)) {
      setEmailMessage("Please enter a valid email address");
      setIsValid(false);
    } else {
      setEmailMessage("Subscribed successfully!");
      setIsValid(true);
      setEmail("");
    }

    setTimeout(() => {
      setEmailMessage("");
    }, 4000);
  };

  return (
    <div className="block bg-black text-white py-8">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center md:justify-between flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-center md:text-start font-bold text-3xl">
              Dev. Raju
            </h1>
            <p className="text-center md:text-start font-semibold text-gray-400">
              Full-stack developer specializing in web and software development
            </p>
          </div>
          <div className="flex-1 w-full mt-4 md:mt-0">
            <p
              className={`${
                isValid === false ? "text-red-600" : "text-green-500"
              }`}
            >
              {emailMessage}
            </p>
            <form
              onSubmit={FormValidation}
              className="flex items-center justify-center flex-col sm:flex-row"
            >
              <input
                type="text"
                placeholder="Enter Your Email Address...."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={` w-full py-1 rounded-lg sm:rounded-[0px] sm:rounded-l-lg px-5 focus:outline-none bg-gradient-to-t from-black to-gray-600 `}
              />
              <button
                type="submit"
                className="w-full sm:w-auto mt-3 sm:mt-0 bg-gradient-to-r from-yellow-400 to-pink-500 font-semibold hover:bg-gradient-to-t px-6 py-1 rounded-lg sm:rounded-[0px] sm:rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-5">
          <hr className="border-2 border-gray-900" />
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row text-gray-400 mt-5">
          <p className="font-semibold ">© 2024 Raju. All right reserved</p>
          <div className="space-x-4">
            <a href="#about" className=" ">
              About
            </a>
            <a href="#project">Projects</a>
            <a href="#service">Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
