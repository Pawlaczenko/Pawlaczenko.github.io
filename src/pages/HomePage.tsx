import React, { FC } from 'react'
import ContactSection from '../layout/ContactSection/ContactSection'
import HeroSection from '../layout/HeroSection/HeroSection'
import ProjectsSection from '../layout/ProjectsSection/ProjectsSection'
import TechSection from '../layout/TechSection/TechSection'

const HomePage : FC = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <TechSection />
      <ContactSection />
    </>
  )
}

export default HomePage