import React from 'react'
// import imgg from '../img/match.jpeg'
// import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import { SportsBaseball } from '@mui/icons-material';
import { BsQuote } from 'react-icons/bs';

function NomialCard(props) {
    return (
      <div className="max-w-sm bg-[#f1f1f1] rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:rotate-3">
        <div className="flex justify-between items-center">
        <div
    className="flex gap-2 border border-gray-900 px-2 rounded-lg py-1 hover:bg-yellow-300 transition-colors duration-300"
  >
    <SportsBaseball className="rounded-full w-6" />
    <p>{props.title}</p>
  </div>
  
          <div>
            <img
              src={props.person}
              alt="Person"
              className="w-24 h-24 rounded-full p-4 border-2 border-gray-300"
            />
          </div>
        </div>
  
        <div className="my-4">
          <BsQuote className="text-yellow-300 text-2xl" />
        </div>
  
        <div>
          <p className="text-2xl py-4">{props.desc}</p>
        </div>
  
        <div className="py-4">
          <h1 className="font-semibold hover:bg-grey-300 hover:cursor-pointer hover:animate-vibrate">
            {props.name}
          </h1>
          <p className="text-gray-400">{props.address}</p>
        </div>
      </div>
    );
  }
export default NomialCard