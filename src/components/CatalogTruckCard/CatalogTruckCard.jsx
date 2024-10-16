import css from './CatalogTruckCard.module.css'
import { Link } from 'react-router-dom'

const CatalogTruckCard = ({ id, name, price, rating, location, gallery: { 0: thumb }, reviews, description }) => {
  
  // console.log(description)

  const textCut = (text) => {
    const wordsArray = text.split(' ')
    return wordsArray.length > 9
      ? wordsArray.slice(0, 10).join(' ')+'...'
      : text
    };

  return (
    <div className={css.truckCard}>
      <div className={css.thumbImgContainer}>
        <img className={css.thumbImg}
        src={thumb.thumb} alt='Truck' />
      </div>
      <div className={css.truckCardInfoBox}>
        <div>
          <h4>{name}</h4>
          <span>{price}</span>
        </div>
        <span>{rating}(
          <Link to='/reviews'>{reviews.length} reviews</Link>
          )</span>
        <span>{location}</span>
        <p>{textCut(description)}</p>
      </div>
    </div>
  )
}

export default CatalogTruckCard
