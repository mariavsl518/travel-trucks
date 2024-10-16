import React from 'react'
import { useSelector } from 'react-redux'
import { getAllTrucks, getTrucksNumber } from '../../redux/trucks/selectors.js'
import CatalogTruckCard from '../CatalogTruckCard/CatalogTruckCard.jsx'
import css from './CatalogTrucksBar.module.css'

const CatalogTrucksBar = () => {

  const items = useSelector(getAllTrucks)

  return (
    <ul className={css.truckList}>
      {items?.map(({ id, name, price, rating, location, gallery, reviews, description,
        automatic, kitchen, bathroom, AC, TV, radio,}) => 
        <li key={id} className={ css.truckListItem}>
        <CatalogTruckCard
            name={name}
            price={price}
            rating={rating}
            location={location}
            gallery={gallery}
            reviews={reviews}
            description={description}
        />
      </li>
      )}
      
    </ul>
  )
}

export default CatalogTrucksBar
