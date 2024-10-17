import React from 'react'
import HotCup from '../icons/HotCup'
import css from './categories-styles.module.css'

const Kitchen = () => {
  return (
    <div className={css.wrapper}>
      <HotCup className={css.icon} /> Kitchen
    </div>
  )
}

export default Kitchen
