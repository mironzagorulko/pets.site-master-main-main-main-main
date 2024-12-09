import React from 'react';
import AnimalCard from '../components/animalcard'; 

import Cat from '../images/кошка.jpg';
import Goat from '../images/коза.jpeg';
import Lion from '../images/animales-enojados-2.jpg' 
import Crocodile from '../images/d0442a8a-18d5-5093-b9db-50acd5c212e7.jpg';
import Owl from '../images/i.webp' 

const animals = [
  {
    image: Cat,
    kind: 'Кошка',
    description: 'Потерялась пушистая кошка. Очень ласковая, серая.',
    mark: 'ca-001-spb',
    district: 'Василеостровский',
    date: '24-03-2020',
  },
  {
    image: Goat,
    kind: 'Коза',
    description: 'Коза была утеряна рядом с Московским вокзалом. Белая, пуховая.',
    mark: 'go-011-spb',
    district: 'Центральный',
    date: '14-03-2022',
  },
  {
    image: Lion,
    kind: 'Лев',
    description: 'Львенок был найден под деревом, хозяин, отзовись.',
    mark: 'go-012-spb',
    district: 'Приморский',
    date: '12-08-2022',
  },
  {
    image: Crocodile,
    kind: 'Крокодил',
    description: 'Крокодил ищет хозяина, живет рядом с болотом.',
    mark: 'go-141-spb',
    district: 'Приморский',
    date: '14-01-2023',
  },
  {
    image: Owl,
    kind: 'Сова',
    description: 'Сова на дереве.',
    mark: 'go-211-spb',
    district: 'Центральный',
    date: '11-12-2022',
  }
];

const AnimalCardsContainer = () => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center" id="animalCards" style={{minHeight: '45vh'}}>
      {animals.map((animal) => (
        <AnimalCard
        data={animal}
        />
      ))}
    </div>
  );
};

export default AnimalCardsContainer;
