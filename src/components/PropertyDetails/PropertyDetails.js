import React from 'react';
import PropTypes from "prop-types";

import Carousel from '../Carousel/Carousel';

import style from './PropertyDetails.css';

const PropertyDetails = ({ activeCard }) => {
  console.log(activeCard);
  const addressLine1 = activeCard.address.address2 ? `${activeCard.address.address1} ${activeCard.address.address2}` : `${activeCard.address.address1}`;
  const addressLine2 = `${activeCard.address.city}, ${activeCard.address.state} ${activeCard.address.zip}`;
  return (
    <div>
      {/* <Carousel imgUrls={} /> */}
      <div>
        <p className={style.address1}>{addressLine1}</p>
        <p className={style.address2}>{addressLine2}</p>
      </div>
      <img src={activeCard.mainImageUrl} alt='mainImage' />
    </div>
  )
}

PropertyDetails.propTypes = {
  activeCard: PropTypes.object
}

export default PropertyDetails;
