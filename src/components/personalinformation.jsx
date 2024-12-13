import React from "react";

import Owl from "../images/i.webp";
import Cat from "../images/кошка.jpg";
import AnimalCard from "./card_animal";
import { AccordionItem } from "react-bootstrap";
import Account from "./cabinet";




// Компонент PersonalInformation
const PersonalInformation = (props) => {
  return (
    <div>
      <div className="container">
        {/* Заголовок личного кабинета */}
        <h1>Добро пожаловать в Личный кабинет!</h1>
        {/* Карточка с данными пользователя */}
        <Account/>

        {/* Карточки животных */}
        <h1>Найденные животные</h1>
        <section className="d-flex flex-row flex-wrap justify-content-center">
          {props.animals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              onEdit={props.onEditAnimal}
              onDelete={props.onDeleteAnimal}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

// Пример данных и обработчиков для передачи в PersonalInformation
const App = () => {
  const user = {
    name: "Мирон Загорулько",
    email: "mironzagorulko9@gmail.com",
    registrationDate: "2023-10-15",
    daysSinceRegistration: 45,
  };

  const animals = [
    {
      id: 10,
      image: Owl,
      title: "Сова",
      description: "Сова на дереве.",
      chipNumber: "go-211-spb",
      area: "Центральный",
      date: "11-12-2022",
    },
    {
      id: 14,
      image: Cat,
      title: "Кошка",
      description: "Потерялась пушистая кошка. Очень ласковая, серая.",
      chipNumber: "ca-001-spb",
      area: "Василеостровский",
      date: "24-03-2020",
    },
  ];

  const handleLogout = () => {
    alert("Выход из аккаунта");
  };

  const handleEditAnimal = (id) => {
    alert(`Редактирование животного с id: ${id}`);
  };

  const handleDeleteAnimal = (id) => {
    alert(`Удаление животного с id: ${id}`);
  };

  return (
    <PersonalInformation
      user={user}
      animals={animals}
      onLogout={handleLogout}
      onEditAnimal={handleEditAnimal}
      onDeleteAnimal={handleDeleteAnimal}
    />
  );
};

export default App;
