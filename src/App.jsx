import React from 'react'
import Banner from './components/Banner'
import BrandAnimation from './components/BrandAnimation'
import FeaturedCourse from './components/FeaturedCourse'
import Courses from './components/Courses'
import Categoty from './components/Categoty'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <main>
      <Banner/>
      <BrandAnimation/>
      <FeaturedCourse/>
      <Courses/>
      <Categoty/>
      <Testimonials/>
    </main>
  )
}

export default App