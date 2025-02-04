import React from 'react'
import heroImage from '../../img/hero.jpeg'
import playerIcon from '../../img/football-player.png'
function PlayerIcon() {
  return (
    <div className='inline-block'>
        <div
        className='h-10 w-10 border-2 rounded-lg relative'
        style={{backgroundImage: `url(${heroImage})`}}
        >
            <img src={playerIcon} alt="" width={50} className='absolute bottom-0 '/>

        </div>
    </div>
  )
}

export default PlayerIcon