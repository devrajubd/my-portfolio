import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SiGmail } from "react-icons/si";
import { FaRegAddressCard } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Contect = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = () => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (emailError) {
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!message) {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_voduae5",
          "template_eo5wr4r",
          form.current,
          "f6oNRXul7UzKR-VtB"
        )
        .then(
          () => {
            setSuccessMessage("Message Sent Successfully!");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="block bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 lg:px-16">
        <h1 className="text-center text-4xl font-bold mb-12">Contact</h1>
        <div className="grid grid-cols-1 lg:grid-cols-[40%,60%] items-center">
          <div className="mr-5">
            <h1 className=" text-cyan-400 text-2xl font-bold">Contact Us</h1>
            <p className="my-3 font-semibold text-gray-400">
              Contact me today to discuss your project, and together we'll
              create a website that makes an impact!
            </p>
            <div>
              <FaRegAddressCard className="inline-block text-cyan-400" />
              <span className="font-semibold ml-3 text-lg text-gray-400">
                Rangpur, Dhaka, Bangladesh
              </span>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-6">
              <span className="text-xl cursor-pointer text-[#CD493B] bg-white p-1 rounded-lg">
                <a href="mailto:raju.premium.freelancer@gmail.com">
                  <SiGmail />
                </a>
              </span>
              <span className="text-3xl cursor-pointer text-[#007AB5]">
                <a
                  href="https://www.linkedin.com/in/dev-raju-hossain-562693208/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span className="text-3xl cursor-pointer text-[#0070F5]">
                <a
                  href="https://www.facebook.com/razu.ahammed.90260"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </span>
              <span className="text-3xl cursor-pointer text-[#009210]">
                <a
                  href="https://wa.me/01722523377?text=Hello%20there!"
                  target="_blank"
                >
                  <FaWhatsappSquare />
                </a>
              </span>
            </div>
          </div>
          <div className="w-full mt-10 lg:mt-0">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-3">
                <label htmlFor="name" className="font-semibold text-lg">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="to_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name....."
                  className={`w-full font-semibold outline-none border-[2px] ${
                    name
                      ? "border-green-400"
                      : nameError
                      ? "border-red-500"
                      : "border-gray-500"
                  }  px-5 bg-gradient-to-b from-black to-gray-700 py-1 rounded-full`}
                />
                {nameError && (
                  <p className="text-red-500">{!name ? nameError : ""}</p>
                )}
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="font-semibold text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail();
                  }}
                  placeholder="Enter Your Email Address....."
                  className={`w-full font-semibold outline-none border-[2px] ${
                    emailError
                      ? "border-red-500"
                      : email
                      ? "border-green-500"
                      : "border-gray-500"
                  }  px-5 bg-gradient-to-b from-black to-gray-700 py-1 rounded-full`}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="font-semibold text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter Your Message....."
                  className={`w-full h-52 font-semibold outline-none border-[2px] ${
                    message
                      ? "border-green-400"
                      : messageError
                      ? "border-red-500"
                      : "border-gray-500"
                  } px-3 bg-gradient-to-b from-black to-gray-700 rounded-lg pt-3`}
                ></textarea>
                {messageError && (
                  <p className="text-red-500">{!message ? messageError : ""}</p>
                )}
              </div>
              <p className="text-green-500">{successMessage}</p>
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-pink-600 font-semibold hover:bg-gradient-to-t px-6 py-1 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
