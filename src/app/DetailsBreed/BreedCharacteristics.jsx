import React from 'react';

const BreedCharacteristics = ({ title, value }) => {
  return (
    <>
      <div className='progress-text'>
        <div className='row'>
          <div className='col-10'>{title}</div>
          <div className='col-2 text-right'>{value}</div>
        </div>
      </div>
      <div className='custom-progress progress'>
        <div
          role='progressbar'
          aria-valuenow={value}
          aria-valuemin='0'
          aria-valuemax='5'
          style={{
            width: (value * 100) / 5 + '%',
          }}
          className='animated custom-bar progress-bar slideInLeft bg-yellow'
        ></div>
      </div>
    </>
  );
};

export default BreedCharacteristics;
