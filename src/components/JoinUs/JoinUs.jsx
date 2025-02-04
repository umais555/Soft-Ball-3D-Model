import React, { useEffect, useRef, useState } from "react";
import heroImage from "../../img/gloves.jpeg";
import ButtonProp from "../ButtonProp/ButtonProp";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import { GoArrowUpRight } from "react-icons/go";

function JoinUs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`lg:h-screen flex flex-col justify-center items-center bg-cover bg-center m-2 rounded-xl p-4 relative transition-all duration-700 ${
        isVisible ? "animate-slideInFromBottom" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

      <div className="absolute top-6 left-6 z-20">
        <ButtonProp val="04" text="Join Us" />
      </div>

      {/* Content Section with Left-Right Animation */}
      <div className="z-10 flex flex-col gap-8 w-full max-w-md text-center animate-moveSideways">
        <div className="relative animate-gradientContainer pb-24 rounded-lg p-6 my-20 md:p-10 flex flex-col gap-6 items-center shadow-lg">
          <h1 className="text-2xl md:text-3xl text-black leading-snug text-center">
            Join the team today and start{" "}
            <span className="inline-block bg-yellow-300 px-3 py-1 rounded-full">
              <SportsVolleyballIcon className="text-black rounded-full p-1" />
            </span>{" "}
            your journey toward excellence!
          </h1>
          <p className="text-gray-500 leading-relaxed max-w-lg text-center">
            <span className="font-bold text-black underline">
              Join our team <GoArrowUpRight className="inline-block text-yellow-300" />
            </span>{" "}
            to grow your skills, connect with a supportive community, and
            achieve your goals. Start your journey to excellence today!
          </p>

          <img
            src={heroImage}
            alt="Baseball gloves"
            className="border-4 border-white absolute rounded-2xl w-36 h-28 bottom-[-50px] md:bottom-[-80px] md:right-[-50px] shadow-lg hover:animate-vibrate"
          />
        </div>
      </div>

      <style>{`
        /* Slide-In Animation */
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInFromBottom {
          animation: slideInFromBottom 0.8s ease-out forwards;
        }

        /* Left-Right Movement Animation */
        @keyframes moveSideways {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-moveSideways {
          animation: moveSideways 3s ease-in-out infinite;
        }

        /* Gradient Background */
        @keyframes gradientBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradientContainer {
          background: linear-gradient(
            90deg,
            #ff6b6b,
            #feca57,
            #48dbfb,
            #1dd1a1,
            #5f27cd
          );
          background-size: 300% 300%;
          animation: gradientBackground 6s ease infinite;
        }

        /* Vibrate Animation */
        @keyframes vibrate {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-4px);
          }
          50% {
            transform: translateX(4px);
          }
          75% {
            transform: translateX(-4px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .hover\\:animate-vibrate:hover {
          animation: vibrate 0.3s ease-in-out;
        }

        .opacity-0 {
          opacity: 0;
        }

        .translate-y-10 {
          transform: translateY(10px);
        }
      `}</style>
    </div>
  );
}

export default JoinUs;
