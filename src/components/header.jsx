import React, { useState } from "react";
import RegistrationModal from "../components/registrationmodal";
import LoginModal from "../components/loginmodal";
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

function Header() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false); // Состояние для модального окна регистрации
  const [showLoginModal, setShowLoginModal] = useState(false); // Состояние для модального окна входа

  // Функция для открытия модального окна регистрации
  const handleRegistrationModalOpen = () => {
    setShowRegistrationModal(true);
  };

  // Функция для закрытия модального окна регистрации
  const handleRegistrationModalClose = () => {
    setShowRegistrationModal(false);
  };

  // Функция для открытия модального окна входа
  const handleLoginModalOpen = () => {
    setShowLoginModal(true);
  };

  // Функция для закрытия модального окна входа
  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="site.html">
            <img src={logo} className="w-25 rounded-3" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Главная</Link>
              </li>
              <li className="nav-item">
                {/* Кнопка для открытия модального окна входа */}
                <button 
                  type="button" 
                  className="btn btn-link nav-link" 
                  onClick={handleLoginModalOpen}
                >
                  Вход
                </button>
              </li>
              <li className="nav-item">
                <Link to="/owner" className="nav-link">Личный кабинет</Link>
              </li>
              <li className="nav-item">
                {/* Клик по тексту "Регистрация" открывает модальное окно */}
                <button 
                  type="button" 
                  className="btn btn-link nav-link" 
                  onClick={handleRegistrationModalOpen}
                >
                  Регистрация
                </button>
              </li>
              <li className="nav-item">
                <Link to="/add_animal" className="nav-link">Добавить объявление</Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">Поиск</Link>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              list="pets"
              placeholder="Поиск"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="button">Поиск</button>
            <datalist id="pets">
              <option value="Кошка" />
              <option value="Собака" />
              <option value="Корова" />
              <option value="Крокодил" />
              <option value="Сова" />
            </datalist>
          </form>
        </div>
      </nav>

      {/* Модальные окна */}
      <RegistrationModal show={showRegistrationModal} onHide={handleRegistrationModalClose} />
      <LoginModal show={showLoginModal} onHide={handleLoginModalClose} />
    </>
  );
}

export default Header;
