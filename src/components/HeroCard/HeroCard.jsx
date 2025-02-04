import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import CallMadeIcon from "@mui/icons-material/CallMade";
import MouseIcon from "@mui/icons-material/Mouse";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import heroImage1 from "../../img/1.jpg";
import heroImage2 from "../../img/2.jpg";
import heroImage3 from "../../img/3.jpg";
import heroImage from "../../img/hero.jpeg";
import LinkButton from "../LinkedButton/LinkButton";
import RightLinkButton from "../LinkedButton/RightLinkButton";

function HeroCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible); // Toggle the current state
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const manuItems = [
    { name: "Home" },
    { name: "Programs" },
    { name: "Coaches" },
    { name: "Schedule" },
  ];

  const textContent = [
    "Join a growing community of",
    "baseball enthusiasts",
    "who've sharpened",
    "their skills and boosted",
    "their confidence with our",
    "expert-led training.",
    "Be part of the success stories!",
  ];

  return (
    <div
      className="md:h-screen flex flex-col justify-between bg-cover bg-center m-2 rounded-xl p-8 relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-0"></div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-2 relative z-20">
        <LinkButton />

        {/* Burger Menu Icon - visible only on small screens */}
        <GiHamburgerMenu
          className="text-white text-3xl md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Navigation Menu */}
        <div
          className={`${
            isOpen
              ? "fixed w-fit mx-auto h-fit top-8 rounded-lg p-4 inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white md:hidden"
              : "hidden"
          } md:flex md:gap-2 md:items-center md:static md:bg-transparent md:z-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-2 text-center md:text-left">
            {manuItems.map((item, index) => (
              <li key={index}>
                {/* Add motion to the buttons */}
                <motion.button
                  type="button"
                  className="text-white text-lg font-medium border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-700 transition-all"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    borderRadius: "10%",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.button>
              </li>
            ))}
            <li className="mt-4 lg:mt-0">
              <div className="rounded-full p-2 bg-white inline-block">
                <SearchIcon
                  className="text-black text-3xl cursor-pointer"
                  onClick={handleToggle}
                />
              </div>
            </li>
            {/* Animated Search Input */}
            <AnimatePresence>
              {isVisible && (
                <li>
                  <motion.input
                    type="text"
                    id="simple-search"
                    className="md:mr-2 md:text-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "200px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </li>
              )}
            </AnimatePresence>
          </ul>
        </div>

        <RightLinkButton />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center flex-1 gap-4 py-3 max-w-sm lg:max-w-md relative">
        {/* Avatar group with moving animation */}
        <div
          className="flex items-start bg-white w-fit p-2 rounded-full bg-opacity-55"
          style={{
            animation: "move-left-right 2s ease-in-out infinite",
          }}
        >
          <AvatarGroup spacing="small">
            <Avatar alt="Remy Sharp" src={heroImage1} />
            <Avatar alt="Travis Howard" src={heroImage2} />
            <Avatar alt="Cindy Baker" src={heroImage3} />
          </AvatarGroup>
        </div>

        {/* Word-by-word text animation on scroll */}
        <motion.div
          className="text-white text-justify leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {textContent.map((text, index) => (
            <motion.div
              key={index}
              className="inline-block mr-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.5, // Delay each word by half a second
                duration: 1,
              }}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="max-w-fit md:max-w-sm lg:max-w-screen-md relative ">
        <div className="lg:w-1/2 ">
          <p className="text-2xl md:text-4xl text-white leading-tight">
            Join a Passionate <br /> Community of Softball Enthusiasts!
            <motion.span
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="bg-black rounded-full p-2 text-white text-sm ml-4 lg:text-xl inline-flex items-center"
            >
              Join Us
              <CallMadeIcon className="text-black bg-white rounded-full ml-2 w-8 h-8 lg:w-12 lg:h-12 " />
            </motion.span>
          </p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 right-2 md:right-4 md:bottom-4 flex items-center md:gap-2 text-white z-50">
        <p className="text-sm lg:text-base ">Scroll Down</p>
        <MouseIcon className="h-4 md:w-6 md:h-6" />
      </div>

      {/* Inline style for the keyframes animation */}
      <style jsx>{`
        @keyframes move-left-right {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(10px);
          }
          50% {
            transform: translateX(0);
          }
          75% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default HeroCard;
