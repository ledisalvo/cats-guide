import { Link } from 'react-router-dom';
import catProfile from '../../../content/images/cat-profile.png';
import './CatBreedCard.css';

const CatBreedCard = ({ catBreedInfo }) => {
  const { id, image, description, name } = catBreedInfo;
  return (
    <div className='col' key={id}>
      <div className='card' style={{ paddingTop: '10px' }}>
        {typeof image !== 'undefined' && Object.entries(image).length !== 0 ? (
          <img
            className='card-img-top card-photo-size'
            src={image.url}
            alt={description}
          />
        ) : (
          <img
            className='card-img-top card-photo-size'
            src={catProfile}
            alt='error'
          />
        )}
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{description}</p>
          <p>
            <small className='text-muted'>
              <Link to={`detail/${name}`}>View more info here</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatBreedCard;
