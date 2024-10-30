import React, { useRef } from 'react'
import css from './CatalogSidebar.module.css'
import TVicon from '../../img/icons/TVicon'
import Diagram from '../../img/icons/Diagram'
import HotCup from '../../img/icons/HotCup'
import Drop from '../../img/icons/Drop'
import Wind from '../../img/icons/Wind'
import Grid3 from '../../img/icons/Grid3'
import Grid4 from '../../img/icons/Grid4'
import Grid9 from '../../img/icons/Grid9'
import { selectFilterQuery } from '../../redux/filter/selectors'
import { useDispatch, useSelector } from 'react-redux'


const CatalogSidebar = () => {

  const dispatch = useDispatch()
  const formRef = useRef();
  const filter = useSelector(selectFilterQuery)

  console.log(filter)

  const handleFilterInputChange = (evt) => { 
    evt.preventDefault(); 
    
    const formData = new FormData(formRef.current)

    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj)

  }
  return (
    <div className={css.sideBar}>
      <form
        ref={formRef}
        className={css.sideBarForm}
        onSubmit={handleFilterInputChange}
      >
        <label htmlFor="location">Location</label>
        <input type="text" name='location' />

        <label htmlFor="filters">
          Filters
        </label>
        <label className={css.sidebarTitle}>Vehicle equipment</label>
        <div className={css.filterList}>
            <input 
            type="radio" 
            value="AC" 
            name="vehicleEquipment"
            id='AC' 
            className={css.filterRadioInput} />
          <label htmlFor="AC" className={css.filterListItem}>
            <Wind/> AC
          </label>
            <input 
            type="radio" 
            value="automatic" 
            name="vehicleEquipment" 
            id='automatic' 
            className={css.filterRadioInput} />
          <label htmlFor="automatic" className={css.filterListItem}>
            <Diagram/> Automatic
          </label>
          <input
            type="radio"
            value="kitchen"
            name="vehicleEquipment"
            id='kitchen'
            className={css.filterRadioInput}
          />
          <label htmlFor="kitchen" className={css.filterListItem}>
            <HotCup/> Kitchen
          </label>
          <input
            type="radio"
            value="TV"
            name="vehicleEquipment"
            id='TV'
            className={css.filterRadioInput}
          />
          <label htmlFor="TV" className={css.filterListItem}>
            <TVicon/> TV
          </label>
          <input type="radio"
            value="bathroom"
            name="vehicleEquipment"
            id='bathroom'
            className={css.filterRadioInput}
          />
          <label htmlFor="bathroom" className={css.filterListItem}>
            <Drop/> Bathroom
          </label>
        </div>

        <label className={css.sidebarTitle}>Vehicle type</label>
        <div className={css.filterList}>
          <input type="radio" 
            value='van'
            name='vehicleType'
            id='van'
            className={css.filterRadioInput}
          />
          <label htmlFor="van" className={css.filterListItem}>
            <Grid3/> Van
          </label>
          <input type="radio" 
            value='fullyIntegrated'
            name='vehicleType'
            id='fullyIntegrated'
            className={css.filterRadioInput}
          />
          <label htmlFor="fullyIntegrated" className={css.filterListItem}>
            <Grid4/> Fully Integrated
          </label>
          <input type="radio" 
            value='alcove'
            name='vehicleType'
            id='alcove'
            className={css.filterRadioInput}
          />
          <label htmlFor="alcove" className={css.filterListItem}>
            <Grid9/> Alcove
          </label>
        </div>
        <button type='submit'
          className={css.searchBtn}
        >Search</button>
      </form>
    </div>

  )
}

export default CatalogSidebar
