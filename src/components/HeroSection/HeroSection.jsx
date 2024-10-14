import React from 'react'
import css from './HeroSection.module.css'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
    <div className={css.heroSectionText}>
          <h1 className={css.heroSectionHeader}>Campers of your dreams</h1>
          <p className={css.heroSectionParagraph}>You can find everything you want in our catalog</p>
            <Link to='/catalog'>
                <button type='button' className={css.heroButton}>View Now</button>
            </Link>
    </div>
  )
}

export default HeroSection
