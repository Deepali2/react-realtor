import React from 'react';
import style from './App.css';
import { createMuiTheme } from '@material-ui/core';

import Router from '../Router';

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

const App = () => {

  return (
    <div className={style.container}>
      <h1>roofstock</h1>
      <Router />
    </div>
  )
}

export default App;