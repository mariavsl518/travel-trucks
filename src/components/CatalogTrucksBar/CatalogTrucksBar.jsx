import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllTrucks } from '../../redux/trucks/selectors.js'
import CatalogTruckCard from '../CatalogTruckCard/CatalogTruckCard.jsx'
import css from './CatalogTrucksBar.module.css'


const CatalogTrucksBar = () => {

  const items = useSelector(selectAllTrucks)
  const [displayedItems, setDispleyedItems] = useState(4)

  return (
    <div className={css.trucksBar}>
      <ul className={css.truckList}>
      {items?.slice(0, displayedItems).map(({ id, name, price, rating, location, gallery, reviews, description,
        transmission, kitchen, bathroom, AC, TV, radio,}) => 
        <li key={id} className={ css.truckListItem}>
        <CatalogTruckCard
            name={name}
            price={price}
            rating={rating}
            location={location}
            gallery={gallery}
            reviews={reviews}
            description={description}
            transmission={transmission}
            kitchen={kitchen}
            bathroom={bathroom}
            ac={AC}
            tv={TV}
            radio={radio}
        />
      </li>
      )}
      </ul>
      {items?.length > displayedItems &&
        (<button className={css.loadMoreBtn}
        onClick={()=>setDispleyedItems(displayedItems+4)}
        type='button'>
        Load more
      </button>) }
    </div>
  )
}

export default CatalogTrucksBar
