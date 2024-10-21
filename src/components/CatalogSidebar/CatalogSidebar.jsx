import React from 'react'
import css from './CatalogSidebar.module.css'
import TVicon from '../../img/icons/TVicon'
import AC from '../../img/categories/AC'
import Diagram from '../../img/icons/Diagram'
import HotCup from '../../img/icons/HotCup'
import Drop from '../../img/icons/Drop'
import Wind from '../../img/icons/Wind'


const CatalogSidebar = () => {
  return (
    <div className={css.sideBar}>
      <div>Location</div>     
      <div className={css.sideBarBlock}>
        <p className={css.sidebarTitle}>Vehicle equipment</p>
        <ul className={css.filterList}>
          <li className={css.filterListItem}>
            <Wind/> AC
          </li>
          <li className={css.filterListItem}>
            <Diagram/> Automatic
          </li>
          <li className={css.filterListItem}>
            <HotCup/> Kitchen
          </li>
          <li className={css.filterListItem}>
            <TVicon/> TV
          </li>
          <li className={css.filterListItem}>
            <Drop/> Bathroom
          </li>
        </ul>
      </div>
      <div className={css.sideBarBlock}>
        <p className={css.sidebarTitle}>Vehicle type</p>
        <ul className={css.filterList}>
          <li className={css.filterListItem}>

          </li>
          <li className={css.filterListItem}>

          </li>
          <li className={css.filterListItem}>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default CatalogSidebar
