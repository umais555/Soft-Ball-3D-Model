import React, { useEffect, useRef, useState } from "react";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Person from "../../img/programs.jpeg"; // Your image path
import ButtonProp from "../ButtonProp/ButtonProp";
import NomialCard from './NomialCard';

function Testimonial() {
  const testimonialRef = useRef(null);
  const [animateClass, setAnimateClass] = useState("opacity-0");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateClass("animate-slideInFromLeft");
        } else {
          setAnimateClass("opacity-0");
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={testimonialRef}
      className={`p-4 md:p-8 transition-all duration-700 ${animateClass}`}
    >
      <div className="text-center">
        <ButtonProp val="04." text="Testimonial" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 py-6 md:items-center md:flex-col">
        <div className="flex-1 flex flex-col gap-4 items-center pt-10 md:gap-8 md:justify-around md:min-h-screen">
          <img
            src={Person}
            alt="Baseball player"
            className="rounded-lg w-2/4 md:w-1/3 shadow-lg hover:animate-vibrate" // Directly apply hover class
          />

          <div className="text-center lg:text-left md:max-w-sm">
            <h1 className="text-3xl md:text-5xl text-gray-800 leading-snug">
              From Our Baseball Community
            </h1>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <NavigateBeforeRoundedIcon className="cursor-pointer hover:scale-110 transition-all text-gray-700" />
              <NavigateNextRoundedIcon className="bg-black text-white rounded-full p-1 cursor-pointer hover:scale-110 transition-all" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center md:flex-row gap-6">
          <NomialCard
            title="Hamid"
            icon={Person}
            desc="The coaching here transformed my game. I'm more confident at the plate!"
            person={Person}
            name="Mudasir"
            address={
              <>
                Lesch-Jakubowski <br />
                577 Glover Lights, Reichertland, British Indian
              </>
            }
          />

          <NomialCard
            title="Hamid"
            icon={Person}
            desc="The coaching here transformed my game. I'm more confident at the plate!"
            person={Person}
            name="Mudasir"
            address={
              <>
                Lesch-Jakubowski <br />
                577 Glover Lights, Reichertland, British Indian
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;



<style jsx>{`
   @keyframes vibrate {
    0% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    50% { transform: translateX(4px); }
    75% { transform: translateX(-4px); }
    100% { transform: translateX(0); }
  }

  .hover:animate-vibrate:hover {
    animation: vibrate 0.3s ease-in-out;
  }
`}</style>
