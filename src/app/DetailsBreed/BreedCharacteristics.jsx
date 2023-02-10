import React from 'react';

const BreedCharacteristics = ({ title, value }) => {
  return (
    <>
      <div className='progress-text'>
        <div className='row'>
          <div className='col-11'>{title}</div>
          <div className='col-1 text-right'>{value}</div>
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
            backgroundColor: '#4183c4',
          }}
          className='animated custom-bar progress-bar slideInLeft'
        ></div>
      </div>
    </>
  );
};

export default BreedCharacteristics;
