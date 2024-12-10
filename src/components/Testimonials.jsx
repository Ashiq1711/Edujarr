import React from 'react'
import Container from './Container'
import groupImage from '../assets/group.png'
import Title from './Title'
const Testimonials = () => {
  return (
    <div >
        <Container>
            <div className='flex flex-col md:flex-row gap-56 items-center'>
                <img className='w-[600px]' src={groupImage} alt="" />
                <div >
                    <Title className={'mt-0'} text1={'The number one factor in '}/>
                    <Title className={'mt-0'} text2={' relevance drives out resistance.'}/>
                    <p className='text-[18px] font-font1 py-10'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                     <button className="px-4 py-2 bg-custom-gradient text-white rounded-md font-font1  transition ease-in-out duration-300 transform hover:scale-110">Learn More</button>
                </div>
            </div>

            <div>
                <Title className={'text-center'} text2={'Testimonials'}/>
                <p className='text-[25px] font-medium font-font2 leading-relaxed py-4 text-center'>What our student say about us</p>
            </div>
        </Container>
    </div>
  )
}

export default Testimonials