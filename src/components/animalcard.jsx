import React, { useState } from 'react';
 const AnimalCard = (props) => {
  return (
    <div className="card m-3 animal-card" style={{width: '18rem', borderRadius: 15, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <img src={'https://pets.xn--80ahdri7a.site'+props.data.photos} className="card-img-top" alt={`Рисунок ${props.data.kind}`} style={{borderTopLeftRadius: 15, borderTopRightRadius: 15, objectFit: 'cover', height: 200}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center text-primary">{props.data.kind}</h5>
        <p className="card-text text-muted" style={{fontSize: '0.9rem'}}>{props.data.description}</p>
        <ul className="list-unstyled flex-grow-1">
        <li><strong>ID:</strong> {props.data.id}</li>
        <li><strong>Телефон:</strong> {props.data.phone}</li>
        <li><strong>Имя нашедшего :</strong> {props.data.name}</li>
          <li><strong>Номер чипа:</strong> {props.data.mark}</li>
          <li><strong>Район:</strong> {props.data.district}</li>
          <li><strong>Дата:</strong> {props.data.date}</li>
    
        </ul>
        <button className="btn btn-primary w-100 mt-auto" style={{borderRadius: 10}}>Связаться</button>
      </div>
    </div>
  );
};

export default AnimalCard;
