import React from "react";
import FooterLogo from "./FooterLogo";
import { IoArrowUpOutline } from "react-icons/io5";
import Balls from "../Balls/Balls";

function FooterSection() {
  return (
    <div
      className="bg-black py-8 rounded-b-lg min-h-screen flex flex-col justify-around"
      style={{
        animation: "backgroundMove 15s ease-in-out infinite", // Gradients moving across the background
      }}
    >
      {/* Top Divider */}
      <hr className="h-1 my-8 w-4/5 bg-slate-300 mx-auto" />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-around mx-auto my-16 w-4/5 gap-12 lg:h-[50vh] h-screen">
        {/* Left Section */}
        <div className="text-white flex flex-col justify-between items-center md:items-start flex-1 space-y-6 text-center lg:text-left">
          <FooterLogo />
          <p
            className="text-2xl md:text-4xl leading-snug"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #ff7e5f, #feb47b, #ff6a00, #f7b731, #00c6ff, #7f00ff)", // Multiple gradient colors
              backgroundSize: "400% 400%", // Larger background size for smooth movement
              backgroundPosition: "right bottom",
              color: "transparent",
              WebkitBackgroundClip: "text", // Clip background for text
              animation: "moveColors 10s ease-in-out infinite", // Smooth color changes for text
            }}
          >
            We're dedicated to empowering baseball players of all skill levels.
          </p>
        </div>

        {/* Right Section (Images) */}
        <div className="flex-1 flex justify-center items-center items-end">
          <div>
            <Balls />
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <hr className="h-1 my-8 w-4/5 bg-slate-300 mx-auto" />

      {/* Contact Info */}
      <div
        className="flex flex-col md:flex-row justify-between text-gray-400 text-lg md:text-2xl w-4/5 mx-auto text-center md:text-left space-y-4 md:space-y-0"
        style={{
          animation: "textColorChange 5s ease-in-out infinite", // Smooth color change for text
        }}
      >
        <div>123 Baseball Lane, Sports City, USA</div>
        <div>+1 (555) 123-4567</div>
        <div>info@sluggeracademy.com</div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-4/5 mx-auto mt-8 text-center">
        <p className="text-white text-sm md:text-base">
          © 2025 Slugger All Rights Reserved
        </p>

        {/* Navigation Buttons */}
        <ul className="flex flex-col md:flex-row gap-4 mt-6 md:mt-0">
          {["Home", "Programs", "Coaches", "Schedule"].map((item, index) => (
            <li key={index} className="text-center">
              <button
                type="button"
                className="text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 transition-all dark:bg-gray-800 dark:hover:bg-gray-700 hover:animate-vibrate"
              >
                {item}
              </button>
            </li>
          ))}

          {/* Social Icon */}
          <li className="flex justify-center">
            <div className="rounded-full p-3 bg-white hover:bg-yellow-700 transition-all">
              <IoArrowUpOutline />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterSection;

// Inline CSS for animations
<style>
  {`
    /* Moving background gradient animation */
    @keyframes backgroundMove {
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

    /* Continuous gradient movement for text */
    @keyframes moveColors {
      0% {
        background-position: 100% 100%;
      }
      50% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }

    /* Continuous text color change animation */
    @keyframes textColorChange {
      0% {
        color: #ff7e5f;
      }
      20% {
        color: #feb47b;
      }
      40% {
        color: #ff6a00;
      }
      60% {
        color: #f7b731;
      }
      80% {
        color: #00c6ff;
      }
      100% {
        color: #7f00ff;
      }
    }

    /* Vibrate effect for buttons */
    @keyframes vibrate {
      0% {
        transform: translateX(0);
      }
      10% {
        transform: translateX(-5px);
      }
      20% {
        transform: translateX(5px);
      }
      30% {
        transform: translateX(-5px);
      }
      40% {
        transform: translateX(5px);
      }
      50% {
        transform: translateX(0);
      }
    }

    .hover\:animate-vibrate:hover {
      animation: vibrate 0.3s ease-in-out infinite;
    }
  `}
</style>
