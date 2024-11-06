import React from 'react'
import css from './CatalogSidebar.module.css'
import CatalogSidebarForm from '../CatalogSidebarForm/CatalogSidebarForm'


const CatalogSidebar = () => {

    return (
    <div className={css.sideBar}>
      <CatalogSidebarForm/>
    </div>

)
  }


export default CatalogSidebar
