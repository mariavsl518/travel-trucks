import React from 'react'
import Diagram from '../icons/Diagram'
import css from './categories-styles.module.css'

const Transmission = ({transmission}) => {
  return (
    <div className={css.wrapper}>
      <Diagram /> {transmission}
    </div>
  )
}

export default Transmission
