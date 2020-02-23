import React from "react";
import style from './Arrow.css';


const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={`${style.slide_arrow} ${direction}`}
    onClick={clickFunction}>
    {glyph}
  </div>
);

export default Arrow;