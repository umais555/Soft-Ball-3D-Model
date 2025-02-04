import CallMadeIcon from "@mui/icons-material/CallMade";
import { motion } from "framer-motion"; // Import motion from framer-motion
import React from "react";

function RightLinkButton({ className }) {
  return (
    <motion.div
      className={`${className} hidden md:flex bg-white text-black gap-2 p-1 w-fit rounded-full items-center`}
      whileHover={{ scale: 1.1 }} // Apply hover zoom to the entire button
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h1 className="text-xl font-semibold md:hidden lg:block p-1">Free Trial</h1>
      <div className="bg-black rounded-full p-1 text-white">
        <CallMadeIcon />
      </div>
    </motion.div>
  );
}

export default RightLinkButton;
