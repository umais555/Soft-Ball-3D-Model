import React, { useEffect, useRef, useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import PlayerImage from "../../img/programs.jpeg";
import ButtonProp from "../ButtonProp/ButtonProp";
import ball from "../../img/BaseLogo.png";

function Programs() {
  const programsRef = useRef(null);
  const [animateClass, setAnimateClass] = useState("opacity-0");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateClass("animate-fadeIn");
        } else {
          setAnimateClass("opacity-0");
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (programsRef.current) {
      observer.observe(programsRef.current);
    }

    return () => {
      if (programsRef.current) {
        observer.unobserve(programsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={programsRef}
      className={`p-4 md:p-8 transition-all duration-700 ${animateClass}`}
    >
      {/* Section Header */}
      <div className="flex w-full items-center justify-between gap-4 py-7">
        {/* 02 Button */}
        <div className="text-center">
          <button className="hover:scale-110 transition-transform duration-300">
            <ButtonProp
              val="02."
              text="Programs"
              className="hover:bg-blue-500 transition-all duration-300"
            />
          </button>
        </div>

        {/* Programs Text */}
        <p className="text-xl md:text-4xl md:w-1/2 md:pl-4 font-semibold text-gray-800 transition-transform duration-300 hover:scale-105 hover:bg-yellow-100 rounded-lg p-2">
          Courses Designed for All Levels
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Image with Text Overlay */}
        <div
          className="bg-center bg-cover p-6 rounded-xl relative text-white flex flex-col justify-between group"
          style={{ backgroundImage: `url(${PlayerImage})` }}
        >
          <div className="flex flex-col gap-2">
            <ul className="flex gap-3 items-center flex-wrap">
              {["Beginner", "Basics"].map((item, index) => (
                <li key={index} className="text-center">
                  <button
                    type="button"
                    className="text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 font-medium rounded-full text-sm px-2 py-2 transition-all duration-300 hover:bg-gray-700 hover:rotate-3 hover:translate-y-2"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-end mt-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight group-hover:rotate-y-180 transition-all duration-500">
              Rookie <br /> Ready
            </h1>
            <NorthEastRoundedIcon className="bg-white text-black rounded-full p-1 w-10 h-10" />
          </div>
        </div>

        {/* Program Details Section */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-2">
          {/* Card 1 - Slugger Squad */}
          <div className="relative border border-gray-300 rounded-lg p-6 flex flex-col gap-4 bg-white shadow-lg">
            <img
              src={ball}
              alt=""
              className="absolute bottom-1 left-1 h-32 object-cover opacity-10"
            />
            <div className="flex justify-between">
              <ControlPointIcon className="text-gray-700 transition-all duration-300 transform hover:rotate-y-180 hover:text-blue-500 hover:animate-shake" />
              <div className="group relative">
                <img
                  src={PlayerImage}
                  alt="Program"
                  className="h-20 rounded-lg object-cover transition-all duration-500 group-hover:transform group-hover:rotate-y-180 group-hover:scale-110"
                />
              </div>
            </div>
            <h1 className="text-lg md:text-xl text-gray-900">Slugger Squad</h1>
          </div>

          {/* Card 2 - MVP Grind */}
          <div
            className="relative text-white flex flex-col justify-between p-6 rounded-lg bg-cover bg-center shadow-lg transform perspective-1000 transition-transform duration-500 hover:rotate-y-180"
            style={{ backgroundImage: `url(${PlayerImage})` }}
          >
            <ControlPointIcon className="transition-all duration-300 transform hover:rotate-y-180 hover:text-blue-500 hover:animate-shake" />
            <h1 className="text-lg md:text-xl font-semibold">MVP Grind</h1>
            <div className="group relative">
              <img
                src={PlayerImage}
                alt="Program"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Placeholder Div */}
          <div className="hidden md:block"></div>

          {/* Navigation and Text */}
          <div className="flex flex-col justify-between">
            <div className="text-right space-x-2">
              <NavigateBeforeRoundedIcon className="text-gray-700 cursor-pointer hover:scale-110 transition" />
              <NavigateNextRoundedIcon className="bg-black text-white rounded-full cursor-pointer p-1 hover:scale-110 transition" />
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam maiores a totam consequatur error atque quaerat quam. Nobis rem soluta officia saepe facere porro, unde pariatur impedit sequi qui.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        /* Vibration effect on hover */
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(5px);
          }
        }

        .group:hover {
          animation: shake 0.5s ease-in-out infinite;
        }

        /* Flip effect for text */
        .group:hover .group-hover\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default Programs;
