import React, { FC } from 'react'
import HeroSection from '../layout/HeroSection/HeroSection'
import ProductsSection from '../layout/ProjectsSection/ProjectsSection'

const HomePage : FC = () => {
  return (
    <>
      <HeroSection />
      <ProductsSection />      
    </>
  )
}

export default HomePage