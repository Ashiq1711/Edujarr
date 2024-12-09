import React from 'react'
import Title from './Title'
import Container from './Container'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import Line from '../assets/Line.png'
const Courses = () => {
  return (
    <div className='bg-custom-gradient'>
       

    <Container>
          <div className="text-center w-[550px] mx-auto py-10">
          <Title className={"text-white"} text1={"Why"} text2={"Learn"} text3={"With Our Courses?"}/>
          <p className="text-[18px] text-white font-font1 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporidunt ut labore veniam...
          </p>
        </div>
        <div className='flex justify-between flex-col md:flex-row py-10 md:py-32 md:gap-5'>
<div className='w-[331px] flex flex-col gap-8 text-center items-center '>
  <img className='w-16' src={icon1} alt="" />
  <h1 className='text-2xl font-bold font-font2 text-white'>01. Learn</h1>
  <p className='text-[18px] leading-7 font-font1 text-white'>Lorem ipsum dolor sit amet, consectetur
dolorili adipiscing elit. Felis donec
massa aliqua.</p>
</div>
<div>
  <img src={Line} alt="" />
</div>
<div className='w-[331px] flex flex-col gap-8 text-center items-center '>
  <img className='w-16' src={icon2} alt="" />
  <h1 className='text-2xl font-bold font-font2 text-white'>01. Learn</h1>
  <p className='text-[18px] leading-7 font-font1 text-white'>Lorem ipsum dolor sit amet, consectetur
dolorili adipiscing elit. Felis donec
massa aliqua.</p>
</div>
<div>
  <img src={Line} alt="" />
</div>
<div className='w-[331px] flex flex-col gap-8 text-center items-center '>
  <img className='w-16' src={icon3} alt="" />
  <h1 className='text-2xl font-bold font-font2 text-white'>01. Learn</h1>
  <p className='text-[18px] leading-7 font-font1 text-white'>Lorem ipsum dolor sit amet, consectetur
dolorili adipiscing elit. Felis donec
massa aliqua.</p>
</div>

        </div>
    </Container>
    </div>
  )
}

export default Courses