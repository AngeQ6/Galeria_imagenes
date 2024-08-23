import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div style={galleryStyle}>
      {images.map((image, index) => (
        <div key={index} style={imageContainerStyle}>
          <img src={image.url} alt={image.alt} style={imageStyle} />
        </div>
      ))}
    </div>
  );
};
