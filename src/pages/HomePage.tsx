import React, { FC } from 'react'
import HeroSection from '../layout/HeroSection/HeroSection'
import ProductsSection from '../layout/ProjectsSection/ProjectsSection'
import TechSection from '../layout/TechSection/TechSection'

const HomePage : FC = () => {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <TechSection />   
    </>
  )
}

export default HomePage