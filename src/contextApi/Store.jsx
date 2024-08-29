import { createContext } from "react";
import wallet from "../assets/wallet.png";
import spotify_clone from "../assets/spotify_clone.png";
import food_delivery from "../assets/food_delivery.png";

const skiils = [
  {
    name: "HTML",
    parent: "95%",
  },
  {
    name: "CSS",
    parent: "90%",
  },
  {
    name: "TAILWIND CSS",
    parent: "90%",
  },
  {
    name: "BOOTSTRAP",
    parent: "88%",
  },
  {
    name: "JAVASCRIPT",
    parent: "80%",
  },
  {
    name: "REACT",
    parent: "85%",
  },
  {
    name: "NODE JS",
    parent: "87%",
  },
  {
    name: "EXPRESS JS",
    parent: "88%",
  },
  {
    name: "MONGO DB",
    parent: "90%",
  },
  {
    name: "SQL",
    parent: "87%",
  },
  {
    name: "MYSQL",
    parent: "86%",
  },
  {
    name: "JQUERY",
    parent: "84%",
  },
];

const Services = [
  {
    id: 1,
    name: "Frontend Development",
    desc: "We deliver sleek, responsive frontend designs for a top-notch user experience.",
  },
  {
    id: 2,
    name: "Backend Development",
    desc: "We build robust, scalable backend systems to power your applications seamlessly.",
  },
  {
    id: 3,
    name: "Web Application",
    desc: "We craft efficient, user-friendly web applications tailored to your needs.",
  },
  {
    id: 4,
    name: "Full-Stack Development",
    desc: "We deliver end-to-end solutions with expertise in both frontend and backend development.",
  },
  {
    id: 5,
    name: "Extension Development",
    desc: "We create custom extensions to enhance functionality and integrate seamlessly with your existing platforms.",
  },
  {
    id: 6,
    name: "2D Animation Drawing",
    desc: "We create engaging 2D animation videos with custom drawings to bring your ideas to life.",
  },
];

const Projects = [
  {
    id: 1,
    name: "Food Delivery App",
    image: food_delivery,
    buildAt: "MERN STACT",
  },
  {
    id: 1,
    name: "Music Player App",
    image: spotify_clone,
    buildAt: "React and Tailwind",
  },
  {
    id: 1,
    name: "ETH Wallet Extension",
    image: wallet,
    buildAt: "MERN STACT",
  },
];

export const StoreContext = createContext(null);
const StoreContextProvider = (propt) => {
  const contextValue = { skiils, Services, Projects };

  return (
    <>
      <StoreContext.Provider value={contextValue}>
        {propt.children}
      </StoreContext.Provider>
    </>
  );
};

export default StoreContextProvider;
