import React from "react";
import style from './ImageSlide.css';

const ImageSlide = ({ url }) => {
  console.log(url);
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    width: '70vw',
    transition: 'all 0.3s ease-in-out'
  };

  return (
    <div style={styles}>
    </div>
  )
}

export default ImageSlide;