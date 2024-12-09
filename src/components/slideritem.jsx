import React from 'react';

function SliderItem({ image, title, description, isActive }) {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <img 
        src={image} 
        className="d-block w-100" 
        alt={title} 
        style={{
          height: "400px", // Высота картинок в слайдере
          objectFit: "cover", // Картинка обрезается, но занимает весь контейнер
        }} 
      />
      <div className="text-center mt-3 text-light">
        <h2 className="text-center">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SliderItem;
