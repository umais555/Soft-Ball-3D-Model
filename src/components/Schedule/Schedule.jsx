import React, { useEffect, useRef, useState } from "react";
import Match from "../../img/match.jpeg";
import Accordien from "../Accordien/Accordien";
import ButtonProp from "../ButtonProp/ButtonProp";

function Schedule() {
  const scheduleRef = useRef(null);
  const [animateClass, setAnimateClass] = useState("opacity-0");
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateClass("animate-slideInFromLeft");
          setAnimateText(true);
        } else {
          setAnimateClass("opacity-0");
          setAnimateText(false);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (scheduleRef.current) {
      observer.observe(scheduleRef.current);
    }

    return () => {
      if (scheduleRef.current) {
        observer.unobserve(scheduleRef.current);
      }
    };
  }, []);

  // The full sentence to animate word-by-word
  const sentence = "Game On: Upcoming Match Schedule";
  const words = sentence.split(" ");

  return (
    <div
      ref={scheduleRef}
      className={`p-2 md:p-6 transition-all duration-700 ${animateClass}`}
    >
      {/* Header Section - Left Aligned */}
      <div className="text-left">
        <button className="hover:scale-110 transition-transform duration-300">
          <ButtonProp
            val="03"
            text="Schedule"
            className="hover:bg-blue-500 transition-all duration-300"
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center md:items-center md:flex-col md:justify-center lg:flex-row lg:items-start lg:gap-8 lg:justify-around mt-6">
        {/* Right Side (Text & Image Section) */}
        <div className="space-y-2 lg:py-6 flex flex-col flex-1 gap-6 p-4 md:p-0 max-w-md lg:justify-between text-center lg:text-left">
          <h1
            className={`text-3xl md:text-4xl md:max-w-sm font-semibold leading-snug transition-all duration-700`}
          >
            <span className="text-yellow-400">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block ${
                    animateText ? `animate-slideInFromLeftDelay-${index}` : ""
                  }`}
                >
                  {word}{" "}
                </span>
              ))}
            </span>
          </h1>
          <p className="text-gray-700 text-sm md:max-w-sm md:text-base leading-relaxed">
            Don't miss a single inning! Check out our upcoming matches to stay
            updated on game times, locations, and opponents.
          </p>
          <img
            src={Match}
            alt="Upcoming baseball match"
            className="rounded-lg shadow-lg h-48 object-cover flip-image"
          />
        </div>

        {/* Left Side (Accordion Section) */}
        <div className="flex-1 max-w-md w-full">
          <Accordien />
        </div>
      </div>

      {/* Home Run Derby Text with Color Animation */}
      <div className="home-run-derby-container mt-6 text-center">
        {/* Your existing text */}
        <h2 className="home-run-derby hover-text">
          Home Run Derby
        </h2>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 1s ease-out forwards;
        }

        /* Adding delay for each word */
        ${[...Array(words.length)].map(
          (_, index) => `
          .animate-slideInFromLeftDelay-${index} {
            animation: slideInFromLeft 1s ease-out forwards;
            animation-delay: ${index * 0.2}s;
          }
        `)}

        /* Flip Effect */
        .flip-image {
          transition: transform 0.5s ease;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .flip-image:hover {
          transform: rotateY(180deg);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        /* Hover effect for "Home Run Derby" text */
        .home-run-derby {
          font-weight: bold;
          font-size: 2rem;
        }

        /* Hover animation for color change */
        .home-run-derby-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .letter {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }

        .letter::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #ff7e5f, #feb47b, #ff6347, #ff1493);
          transition: left 0.5s ease;
        }

        .letter:hover::before {
          left: 0;
        }

        .letter:hover {
          color: transparent;
        }

        .home-run-derby:hover {
          color: transparent;
          background: linear-gradient(to right, #ff7e5f, #feb47b, #ff6347, #ff1493);
          background-clip: text;
          -webkit-background-clip: text;
          animation: gradientAnimation 1s infinite;
        }

        @keyframes gradientAnimation {
          0% {
            background-position: -200% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>
    </div>
  );
}

export default Schedule;
