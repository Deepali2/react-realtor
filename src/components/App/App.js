import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './App.css';

import Item from '../Item/Item';

const App = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://dev1-sample.azurewebsites.net/properties.json')
      .then(response => {
        console.log(response.data.properties);
        setData(response.data.properties)
      })
  }, []);

  return (
    <div className={style.container}>
      <h1>roofstock</h1>
      <ul className={style.items}>
        {data
          ? data.map(item => (
            <Item
              item={item}
              key={item.id}
              activeCard={activeCard === item.id}
              setActiveCard={setActiveCard}
            />
          ))
          : `loading data`
        }
      </ul>
    </div>
  )
}

export default App;