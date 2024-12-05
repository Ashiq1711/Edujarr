import React from 'react'
import Banner from './components/Banner'
import Container from './components/Container'
import BrandAnimation from './components/BrandAnimation'
import FeaturedCourse from './components/FeaturedCourse'
import Courses from './components/Courses'

const App = () => {
  return (
    <main>
      <Banner/>
      <BrandAnimation/>
      <FeaturedCourse/>
      <Courses/>
    </main>
  )
}

export default App