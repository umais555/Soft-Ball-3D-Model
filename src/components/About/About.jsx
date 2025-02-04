import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import React, { useEffect, useRef, useState } from "react";
import base from "../../img/bas.jpg";
import playerIcon from '../../img/football-player.png'
import ButtonProp from "../ButtonProp/ButtonProp";
import { GoArrowUpRight } from "react-icons/go";
import { MdSportsCricket } from "react-icons/md";

function About() {
  const aboutRef = useRef(null);
  const [animateClass, setAnimateClass] = useState("opacity-0");
  const [rotateClass, setRotateClass] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateClass("animate-fadeIn");
          setRotateClass("animate-rotateBaseball");
        } else {
          setAnimateClass("opacity-0");
          setRotateClass(""); // Reset rotation
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="h-full p-4 md:p-8 flex flex-col justify-around relative bg-white"
    >
      {/* Floating Baseball Image */}
      <img
        src={base}
        alt="Baseball"
        className={`absolute z-0 hidden lg:block rotate-45 rounded-lg opacity-65 top-16 left-1/2 transform -translate-x-1/2 xl:left-[30rem] xl:translate-x-0 ${rotateClass}`}
        width={150}
      />

      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-center">
          <ButtonProp val="01." text="About" className="about-button" />
        </div>
        <div className="text-gray-700 text-lg md:text-xl font-medium flex items-center gap-2 cursor-pointer vibrate-on-hover">
          Learn More
          <GoArrowUpRight className="text-black text-2xl md:text-3xl" />
        </div>
      </div>

      {/* Middle Section: Main Text Content */}
      <div className={`z-10 p-4 text-center ${animateClass}`}>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed mx-auto max-w-lg md:max-w-xl lg:max-w-3xl">
          We provide exceptional baseball <football-player /> training at over{" "}
          <span className="inline-block bg-yellow-300 px-3 py-1 rounded-full">
            <SportsVolleyballIcon className="text-black bg-white rounded-full p-1" />
            <p className="inline-block text-black text-xl">100+</p>
          </span>{" "}
          bustling cities to picturesque fields in{" "}
          <span className="inline-block bg-yellow-300 px-3 py-1 rounded-full">
            <SportsVolleyballIcon className="text-black rounded-full p-1" />
          </span>{" "}
          serene settings to create the perfect environment for{" "}
          <span className="text-yellow-300 font-bold">
            honing your skills and enjoying the game you love.
          </span>
        </h2>
      </div>

      {/* Bottom Divider Icon */}
      <div className="mt-12 flex justify-center pb-20 pt-5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-1 bg-yellow-500 rounded-full"></div>
          <div className="w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full cricket-icon">
            <MdSportsCricket className="text-3xl" />
          </div>
          <div className="w-10 h-1 bg-yellow-500 rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes rotateBaseball {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(-45deg);
          }
        }
        @keyframes vibrate {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-3px);
          }
          50% {
            transform: translateX(3px);
          }
          75% {
            transform: translateX(-2px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out forwards;
        }
        .animate-rotateBaseball {
          animation: rotateBaseball 1s ease-in-out forwards;
        }
        .vibrate-on-hover:hover {
          animation: vibrate 0.4s ease-in-out;
        }
        .cricket-icon:hover {
          animation: vibrate 0.4s ease-in-out;
          background-color: #fbbf24; /* Amber hover effect */
          transition: background-color 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default About;
