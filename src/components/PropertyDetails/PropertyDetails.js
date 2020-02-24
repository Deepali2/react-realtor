import React from 'react';
import PropTypes from "prop-types";

import Carousel from '../Carousel/Carousel';

import style from './PropertyDetails.css';

const PropertyDetails = ({ activeCard }) => {
  const addressLine1 = activeCard.address.address2 ? `${activeCard.address.address1} ${activeCard.address.address2}` : `${activeCard.address.address1}`;
  const addressLine2 = `${activeCard.address.city}, ${activeCard.address.state} ${activeCard.address.zip}`;
  const imgUrls = activeCard.resources ? activeCard.resources.photos.map(photo => photo.url) : null;

  return (
    <div>
      <div>
        <p className={style.address1}>{addressLine1}</p>
        <p className={style.address2}>{addressLine2}</p>
      </div>
      {imgUrls && <Carousel imgUrls={imgUrls} />}
    </div>
  )
}

PropertyDetails.propTypes = {
  activeCard: PropTypes.object
}

export default PropertyDetails;
