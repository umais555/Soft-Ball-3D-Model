import React from "react";
import footerlogo from "../../img/footerlogo.png";

function FooterLogo() {
  return (
    <div
      className="bg-white text-black flex gap-2 p-2 w-fit rounded-full items-center"
      style={{
        animation: "moveCircle 5s linear infinite", // Animation applied to the logo
      }}
    >
      <div className="w-18 bg-yellow-300 rounded-full p-2">
        <img src={footerlogo} alt="Logo" className="" width={42} />
      </div>
      <h1 className="text-2xl font-semibold">Slugger.</h1>

      {/* CSS for the animation */}
      <style>
        {`
          @keyframes moveCircle {
            0% {
              transform: translate(0, 0);
            }
            25% {
              transform: translate(-10px, -10px);
            }
            50% {
              transform: translate(10px, -10px);
            }
            75% {
              transform: translate(10px, 10px);
            }
            100% {
              transform: translate(-10px, 10px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default FooterLogo;
