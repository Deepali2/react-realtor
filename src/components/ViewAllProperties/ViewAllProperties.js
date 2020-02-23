import React from 'react';
import PropTypes from "prop-types";
import style from './ViewAllProperties.css';

import Item from '../Item/Item';

const ViewAllProperties = ({ data, setActiveCard }) => {
  return (
    <ul className={style.items}>
      {data
        ? data.map(item => (
          <Item
            item={item}
            key={item.id}
            setActiveCard={setActiveCard}
          />
        ))
        : `loading data`
      }
    </ul>
  )
}

ViewAllProperties.propTypes = {
  data: PropTypes.array,
  setActiveCard: PropTypes.func
}

export default ViewAllProperties;
