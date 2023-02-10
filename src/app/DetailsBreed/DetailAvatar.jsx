import React from 'react';
import catProfile from '../../content/images/cat-profile.png';

const DetailAvatar = ({ breedDetail }) => {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          backgroundColor: '#f7f7f7',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        {typeof breedDetail[0].image !== 'undefined' ? (
          <img
            className='card-img-top card-photo-size'
            src={breedDetail[0].image.url}
            alt={breedDetail[0].description}
          />
        ) : (
          <img
            className='card-img-top card-photo-size'
            src={catProfile}
            alt='error'
          />
        )}
      </div>
      <div className='bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center'>
        <h4 className='margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600'>
          {breedDetail[0].name}
        </h4>
        <p className='sm-width-95 sm-margin-auto'>
          {breedDetail[0].temperament}
        </p>
      </div>
    </>
  );
};

export default DetailAvatar;
