import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import PropertyDetails from './PropertyDetails/PropertyDetails';
import ViewAllProperties from './ViewAllProperties/ViewAllProperties';

const Router = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [data, setData] = useState(null);
  const [listView, setListView] = useState(false);

  useEffect(() => {
    axios.get('http://dev1-sample.azurewebsites.net/properties.json')
      .then(response => {
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
                listView={listView}
                setListView={setListView}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default Router;