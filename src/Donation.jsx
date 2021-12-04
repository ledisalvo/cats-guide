import React from 'react';
import { useNavigate } from 'react-router-dom';

function DonationCard(props) {
  const navigate = useNavigate();
  const { title, price, info } = props;

  return (
    <div className='col'>
      <div className='card mb-4 rounded-3 shadow-sm border-primary'>
        <div className='card-header py-3 text-white bg-primary border-primary'>
          <h4 className='my-0 fw-normal'>{title}</h4>
        </div>
        <div className='card-body'>
          <h1 className='card-title pricing-card-title'>
            {price}
            <small className='text-muted fw-light'>/mo</small>
          </h1>
          <ul className='list-unstyled mt-3 mb-4'>
            <p>{info}</p>
          </ul>
          <button
            type='button'
            className='w-100 btn btn-outline-primary'
            onClick={() => navigate('/App/cart')}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Donation() {
  return (
    <div className='container'>
      <div className='pricing-header p-3 pb-md-4 mx-auto text-center'>
        <h1 className='display-4 fw-normal'>Donation</h1>
        <p className='fs-5 text-muted'>Choose a plan for helping us</p>
      </div>
      <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
        <DonationCard
          title='Cat Litter'
          price='10'
          info='The equivalent of 3 Kg of cat litter'
        />
        <DonationCard
          title='Food'
          price='20'
          info='The equivalent of 15 Kg of food'
        />
        <DonationCard
          title='Medicines'
          price='50'
          info='Necesary to buy antibiotics and vaccines'
        />
      </div>
    </div>
  );
}
