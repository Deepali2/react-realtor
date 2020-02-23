import React, { useState, useEffect } from 'react';
import style from './App.css';

import Router from '../Router';

const App = () => {

  return (
    <div className={style.container}>
      <h1>roofstock</h1>
      <Router />
    </div>
  )
}

export default App;