import React from 'react'
import {FaHeart,FaEye} from 'react-icons/fa';

const Card = () => {
  return (
    <div className="bg-white relative w-[220px] h-[110px] rounded-2xl hover:scale-110 transition-[300]">
        <div className="absolute bottom-[3px] right-[8px] flex gap-2">
            <button ><FaHeart/></button> 1
            <button ><FaEye/></button> 1
        </div>
    </div>
  )
}

export default Card