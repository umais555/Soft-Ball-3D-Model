import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';

function LinkButton() {
  return (
    <div 
      className='bg-white text-black flex gap-2 p-1 w-fit rounded-full items-center'
      style={{
        animation: 'moveCircle 10s linear infinite', // Set the speed of the animation here (10s)
      }}
    >
      <div className='bg-yellow-300 rounded-full p-1'>
        <CallMadeIcon />
      </div>
      
      <h1 className='text-xl font-semibold md:hidden lg:block'>
        Sluger.
      </h1>

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

export default LinkButton;
