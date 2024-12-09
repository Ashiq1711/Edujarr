import React from 'react'
import Banner from './components/Banner'
import BrandAnimation from './components/BrandAnimation'
import FeaturedCourse from './components/FeaturedCourse'
import Courses from './components/Courses'
import Categoty from './components/Categoty'

const App = () => {
  return (
    <main>
      <Banner/>
      <BrandAnimation/>
      <FeaturedCourse/>
      <Courses/>
      <Categoty/>
    </main>
  )
}

export default App