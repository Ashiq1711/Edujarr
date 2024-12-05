import React from 'react'

const Title = ({text1,text2,text3}) => {
  return (
    <>
    <p className='text-3xl font-bold font-font2'>{text1} <span className='text-primary'>{text2}</span>{text3} <span></span></p>
    </>
  )
}

export default Title