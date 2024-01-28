import React from 'react'
import Wrapper from './Wrapper'

// import Swiper styles
// import 'swiper/css';

const Slides = () => {
  return (
    <>
        <div className="ml-[50px] mt-[80px] text-white">
            <h1>Trending Topics</h1>
        </div>
        <div className="flex flex-col gap-[100px] w-full mt-[20px]  ml-[50px]">
            <Wrapper/>
            <Wrapper/>
            <Wrapper/>
        </div>
    </>
  )
}

export default Slides