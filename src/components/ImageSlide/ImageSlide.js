import React from "react";

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    width: '50vw',
    // transition: 'all 0.3s ease-in-out'
  };

  return (
    <div style={styles}>
    </div>
  )
}

export default ImageSlide;