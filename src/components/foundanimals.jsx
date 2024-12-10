import React, { useEffect, useState } from 'react';
import AnimalCard from '../components/animalcard'; 




const AnimalCardsContainer = () => {
  let[card, setCard]=useState({data:{orders:[]}});
  useEffect(() => LoaderData(), []);
function LoaderData() {
  fetch("https://pets.сделай.site/api/pets")
    .then((response) => response.json())
    .then(result => {
      console.log(result); // Просмотрите, что приходит от сервера
      setCard(result);
    });
}

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center" id="animalCards" style={{minHeight: '45vh'}}>
      {card.data.orders.map((animal) => (
        <AnimalCard
        data={animal}
        />
      ))}
    </div>
  );
};

export default AnimalCardsContainer;
