import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Rate from './styles/Rate';
import CarStyles from './styles/CarStyles';
import PromoTag from './styles/PromoTag';

const Car = ({ car }) => {
  return (
    <CarStyles>
      {car.imageURL && <img src={car.imageURL} alt={car.make} />}
      <Rate>
        <Link
          href={{
            pathname: '/car',
            query: { id: car.id }
          }}
        >
          <a>$23 /day</a>
        </Link>
      </Rate>
      {car.isVerified ? <PromoTag>Verified</PromoTag> : null}
      <p>
        {car.make}- {car.model} ({car.year})
      </p>
      <p>{car.year}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: 'car',
            query: { id: car.id }
          }}
        >
          <button>View Details 👁</button>
        </Link>

        {/* <Link
            href={{
              pathname: 'car',
              query: { id: car.id }
            }}
          >
            <button>Hire Car ✋</button>
          </Link> */}
      </div>
    </CarStyles>
  );
};

Car.propTypes = {
  car: PropTypes.object.isRequired
};

export default Car;
