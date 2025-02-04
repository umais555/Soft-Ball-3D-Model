import React from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';

function AboutIcon() {
  return (
    <div className='inline-block'>
        <div className='bg-white text-black flex gap-2 p-1 w-fit rounded-full  items-center'>
    <div className=' bg-yellow-300 rounded-full p-1'>
        <CallMadeIcon />
    </div>
    <h1 className='font-semibold'>100+</h1>

</div>

    </div>
  )
}

export default AboutIcon