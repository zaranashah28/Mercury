import React from 'react';

function ExampleCarouselImage({ imageUrl, text }) {
  return (
    <div>
      <img style={{height: "60%", width: "50%"}} src={imageUrl} alt={text} />
    </div>
  );
}

export default ExampleCarouselImage;
