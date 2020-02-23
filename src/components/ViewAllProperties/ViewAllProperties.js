import React from 'react';
import PropTypes from "prop-types";
import style from './ViewAllProperties.css';

import Item from '../Item/Item';

import { CircularProgress } from '@material-ui/core';

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
        : <CircularProgress />
      }
    </ul>
  )
}

ViewAllProperties.propTypes = {
  data: PropTypes.array,
  setActiveCard: PropTypes.func
}

export default ViewAllProperties;
