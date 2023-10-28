import React from 'react';

const VideoComponent = () => {
  return (
    <div>
      <h1>My Video</h1>
      <video controls width="400" autoPlay>
        <source src="../images/v1.mp4" type="video/mp4" />
        {/* Add more <source> elements for different video formats (webm, ogg) */}
      </video>
    </div>
  );
}

export default VideoComponent;
