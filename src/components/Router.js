import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import PropertyDetails from './PropertyDetails/PropertyDetails';
import ViewAllProperties from './ViewAllProperties/ViewAllProperties';

const Router = () => {
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
    <div>
      <main>
        <Switch>
          <Route path='/property-details'
            render={props => (
              <PropertyDetails
                {...props}
                activeCard={activeCard}
              />
            )}
          />
          <Route path='/'
            render={props => (
              <ViewAllProperties
                {...props}
                data={data}
                setActiveCard={setActiveCard}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default Router;