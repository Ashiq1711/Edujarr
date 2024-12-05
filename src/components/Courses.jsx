import React from 'react'
import Title from './Title'
import Container from './Container'

const Courses = () => {
  return (
    <div className='bg-custom-gradient'>
       

    <Container>
          <div className="text-center w-[500px] mx-auto py-10">
          <Title text1={"Why"} text2={"Learn"} text3={"With Our Courses"}/>
          <p className="text-base font-font1 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporidunt ut labore veniam...
          </p>
        </div>

    </Container>
    </div>
  )
}

export default Courses