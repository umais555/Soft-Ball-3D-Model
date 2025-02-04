import React from 'react';
import Ball from '../../img/baseball.jpg';
import BallLogo from '../../img/BaseLogo.png';

function Balls() {
  return (
    <div className="mx-auto min-w-64 min-h-48 relative">
      <img
        src={Ball}
        alt="Baseball"
        className="w-3/4 absolute z-20 rounded-xl bottom-0"
        style={{
          animation: "moveCircle 5s linear infinite", // Applying the animation
        }}
      />
      <img
        src={BallLogo}
        alt="Baseball Logo"
        className="w-3/4 top-[-10px] opacity-25 right-[-30px] absolute z-10"
        style={{
          animation: "moveCircle 5s linear infinite", // Applying the animation to the logo as well
        }}
      />

      {/* Inline CSS for animation */}
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

export default Balls;
