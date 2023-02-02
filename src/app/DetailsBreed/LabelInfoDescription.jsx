import React from 'react';

const LabelInfoDescripcion = ({
  icon,
  label,
  linkDescription,
  description,
}) => {
  return (
    <div className='row'>
      <div className='col-md-5 col-5'>
        <i className={icon}></i>
        {linkDescription?.length > 0 ? (
          <a target='_blank' rel='noreferrer' href={linkDescription}>
            <strong style={{ marginLeft: '10px' }}>{label}</strong>
          </a>
        ) : (
          <strong style={{ marginLeft: '10px' }}>{label}</strong>
        )}
      </div>
      <div className='col-md-7 col-7'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LabelInfoDescripcion;
