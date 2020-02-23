import React from "react";
import style from './ImageSlide.css';

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className={style.image-slide}
      style={styles}
    >
    </div>
  );
}

export default ImageSlide;