import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTrucks } from '../../redux/trucks/operations.js'
import  CatalogSidebar  from '../../components/CatalogSidebar/CatalogSidebar.jsx'
import CatalogTrucksBar from '../../components/CatalogTrucksBar/CatalogTrucksBar.jsx'
import css from './CatalogPage.module.css'

const CatalogPage = () => {

  const dispatch = useDispatch()

  useEffect(() => { 
    dispatch(fetchTrucks())
  }, [dispatch])

  return (
    <section className={css.catalogSection}>
      <CatalogSidebar />
      <CatalogTrucksBar />
    </section>
  )
}

export default CatalogPage
