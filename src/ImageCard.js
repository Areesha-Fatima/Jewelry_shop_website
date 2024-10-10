import React from 'react';

function ImageCard(props) {
  return (
    <div className="image-card">
      <img src={props.imageSrc} alt={props.imageAlt} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default ImageCard;