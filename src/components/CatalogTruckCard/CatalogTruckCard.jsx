import css from './CatalogTruckCard.module.css'
import { Link } from 'react-router-dom'
import Transmission from '../../img/categories/Transmission'
import Kitchen from '../../img/categories/Kitchen'
import Bathroom from '../../img/categories/Bathroom'
import AC from '../../img/categories/AC'
import Radio from '../../img/categories/Radio'

const CatalogTruckCard = ({ id, name, price, rating, location, gallery: { 0: thumb }, reviews, description,
  transmission, kitchen, bathroom, ac, tv, radio, }) => {
  
  const textCut = (text) => {
    const wordsArray = text.split(' ')
    return wordsArray.length > 12
      ? wordsArray.slice(0, 12).join(' ')+'...'
      : text
    };

  return (
    <div className={css.truckCard}>
      <div className={css.thumbImgContainer}>
        <img className={css.thumbImg}
        src={thumb.thumb} alt='Truck' />
      </div>
      <div className={css.truckCardInfoBox}>
        <div className={css.truckCardInfoHeader}>
          <p>{name}</p>
          <p>€{price}</p>
        </div>
        <div className={css.truckCardSecondLine}>
          <span>{rating}(
          <Link to='/reviews'>{reviews.length} reviews</Link>
          )</span>
          <span>{location}</span>
        </div>
        <p>{textCut(description)}</p>
        <ul className={css.categoriesBlock}>
          <li>
            {transmission ? <Transmission transmission={transmission} /> : <></>}
          </li>
          <li>
            {kitchen ? <Kitchen/> : <></>}
          </li>
          <li>
            { bathroom? <Bathroom/> : <></>}
          </li>
          <li>
            { ac ? <AC/> : <></>}
          </li>
          <li>
            { radio ? <Radio/> : <></>}
          </li>
        </ul>
          <Link className={css.showMoreBtn}
            to='/details'>
            Show more
          </Link>
      </div>
    </div>
  )
}

export default CatalogTruckCard
