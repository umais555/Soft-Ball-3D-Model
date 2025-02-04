import React from "react";

function ButtonProp(props) {
  return (
    <div className="flex gap-4 items-center">
      {/* Left Button (with background color change on hover) */}
      <div
        className={`bg-black text-white rounded-full p-2 transition-all duration-300 transform ${props.className} hover:bg-green-500 hover:scale-110`}
      >
        {props.val}
      </div>

      {/* Right Button (with background color change on hover) */}
      <div
        className={`bg-gray-300 text-black p-2 rounded-full transition-all duration-300 transform ${props.className} hover:bg-yellow-500 hover:scale-110`}
      >
        {props.text}
      </div>
    </div>
  );
}

export default ButtonProp;
