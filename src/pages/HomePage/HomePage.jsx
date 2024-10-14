import React from 'react'
import css from './HomePage.module.css'
import HeroSection from '../../components/HeroSection/HeroSection'

const HomePage = () => {
  return (
    <div className={css.heroSection}>
        <HeroSection/>
    </div>
  )
}

export default HomePage
