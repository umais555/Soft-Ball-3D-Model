import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import React from "react";
import acc from "../../img/match.jpeg";
import RightLinkButton from "../LinkedButton/RightLinkButton";

function Accordien() {
  return (
    <div className="space-y-4">
      <hr />

      {/* Home Run Derby Section */}
      <div className="flex flex-col md:flex-row gap-6 py-4 md:py-2 items-center">
        <div className="text-gray-800 text-xl">01</div>

        <div className="flex flex-col gap-4 md:gap-2 flex-1">
          <h1 className="text-2xl font-semibold">Home Run Derby</h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            This event is all about power-hitting, where players aim to hit the
            most home runs and claim the supercrown.
          </p>
          <button
            type="button"
            className="border-2 border-black rounded-full py-2 lg:w-1/2 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:animate-shake">
            View Details
          </button>
        </div>

        <div className="pt-4 md:pt-2">
          <img
            src={acc}
            alt="Home Run Derby"
            className="rounded-lg w-full md:w-40 object-cover shadow-lg hover:flip-image"
          />
        </div>
      </div>

      <hr />

      {/* Other Events */}
      {[
        { id: "02", title: "Diamond ShowDown" },
        { id: "03", title: "FastPitch Frenzy" },
        { id: "04", title: "All-Star Weekend" },
      ].map((event, index) => (
        <React.Fragment key={index}>
          <div className="flex justify-between items-center py-4 md:py-0 group">
            <div className="flex gap-2 items-center group-hover:bg-gray-200 p-2 rounded-lg transition-all duration-300">
              <p className="text-gray-800 text-lg">{event.id}.</p>
              <h1 className="text-2xl font-semibold">{event.title}</h1>
            </div>
            <div>
              <NavigateNextRoundedIcon className="bg-slate-200 rounded-full p-1 cursor-pointer hover:scale-105 transition-all" />
            </div>
          </div>
          <hr className="border-t border-gray-300" />
        </React.Fragment>
      ))}

      {/* Join Us Button */}
      <div className="flex justify-end pt-6 md:pt-0">
        <RightLinkButton />
      </div>

      {/* CSS for shake and flip effect */}
      <style jsx>{`
        /* Define the keyframe animation for shake */
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
            transform: translateX(0);
          }
        }

        /* Add shake animation when hovering on the button */
        .hover\\:animate-shake:hover {
          animation: shake 0.5s ease-in-out infinite;
        }

        /* Flip image on hover */
        .hover\\:flip-image:hover {
          transform: rotateY(180deg);
          transition: transform 0.6s;
        }

        /* Add 3D effect and smooth transitions */
        img {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}

export default Accordien;
