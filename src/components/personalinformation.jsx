import React from "react";
import Video from "../video/WIN_20241127_18_06_37_Pro.mp4";
import Owl from "../images/i.webp";
import Cat from "../images/кошка.jpg";

// Компонент AnimalCard
const AnimalCard = (props) => {
  return (
    <div
      className="card m-3"
      style={{
        width: "18rem",
        borderRadius: 15,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={props.animal.image}
        className="card-img-top"
        alt={`Рисунок ${props.animal.title}`}
        style={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          objectFit: "cover",
          height: 200,
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center text-primary">
          {props.animal.title}
        </h5>
        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
          {props.animal.description}
        </p>
        <ul className="list-unstyled flex-grow-1">
          <li>
            <strong>id:</strong> {props.animal.id}
          </li>
          <li>
            <strong>Номер чипа:</strong> {props.animal.chipNumber}
          </li>
          <li>
            <strong>Район:</strong> {props.animal.area}
          </li>
          <li>
            <strong>Дата:</strong> {props.animal.date}
          </li>
        </ul>
        <button
          className="btn btn-primary w-100 mt-auto"
          style={{ borderRadius: 10 }}
          onClick={() => props.onEdit(props.animal.id)}
        >
          Редактировать
        </button>
        <br />
        <button
          className="btn btn-danger w-100 mt-auto"
          style={{ borderRadius: 10 }}
          onClick={() => props.onDelete(props.animal.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

// Компонент PersonalInformation
const PersonalInformation = (props) => {
  return (
    <div>
      <div className="container">
        {/* Заголовок личного кабинета */}
        <h1>Добро пожаловать в Личный кабинет!</h1>
        {/* Карточка с данными пользователя */}
        <section className="card">
          {/* Видео вместо фото */}
          <div className="user-photo">
            <video autoPlay loop muted>
              <source src={Video} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
          <h3>Информация о пользователе</h3>
          <p>
            <strong>Имя:</strong> {props.user.name}
          </p>
          <p>
            <strong>Email:</strong> {props.user.email}
          </p>
          <p>
            <strong>Дата регистрации:</strong> {props.user.registrationDate}
          </p>
          <p>
            <strong>Количество дней с регистрации:</strong>{" "}
            {props.user.daysSinceRegistration}
          </p>
          <button className="logout-btn" onClick={props.onLogout}>
            Выйти
          </button>
        </section>

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
