import React from "react";
import RegistrationModal from "../components/registrationmodal"; 
import LoginModal from "../components/loginmodal";
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

function Header() {
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
                <button type="button" className="btn btn-link nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">
                  Вход
                </button>
              </li>
              <li className="nav-item">
                <Link to="/owner" className="nav-link">Личный кабинет</Link>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-link nav-link" data-bs-toggle="modal" data-bs-target="#registrationModal">
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

      <RegistrationModal />
      <LoginModal />
    </>
  );
}

export default Header;
