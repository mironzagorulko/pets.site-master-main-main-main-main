
import React, { useEffect } from "react";
function Form() {
  useEffect(() => {
    // Валидация формы входа
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (loginForm.checkValidity() === false) {
          event.stopPropagation();
        } else {
          window.location.href = "owner.html"; // Перенаправление при успешной валидации
        }
        loginForm.classList.add('was-validated');
      });
    }

    // Выход из личного кабинета
    const logout = () => {
      alert('Вы вышли из системы');
      window.location.href = 'index.html';
    };

    // Проверка авторизации
    const isAuthenticated = true;
    const errorMessage = document.getElementById('error-message');
    if (!isAuthenticated && errorMessage) {
      errorMessage.style.display = 'block';
    }

    // Показать/скрыть поля пароля при регистрации
    const registerCheckbox = document.getElementById('register');
    const passwordFields = document.getElementById('passwordFields');
    if (registerCheckbox && passwordFields) {
      registerCheckbox.addEventListener('change', function () {
        passwordFields.classList.toggle('d-none', !this.checked);
      });
    }

    // Валидация формы объявления
    const animalForm = document.getElementById('animalForm');
    if (animalForm) {
      animalForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let errors = {};
        const name = document.getElementById("name").value.trim();
        if (!/^[а-яА-ЯёЁ\s-]+$/.test(name)) {
          errors.name = "Имя должно содержать только кириллицу, пробелы или дефисы.";
        }
        const phone = document.getElementById("phone").value.trim();
        if (!/^\+?\d+$/.test(phone)) {
          errors.phone = "Телефон должен содержать только цифры и знак +.";
        }
        const email = document.getElementById("email").value.trim();
        if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
          errors.email = "Некорректный формат email.";
        }
        const password = document.getElementById("password").value;
        if (password && (password.length < 7 || !/\d/.test(password) || !/[A-Z]/.test(password) || !/[a-z]/.test(password))) {
          errors.password = "Пароль должен быть не менее 7 символов, содержать цифру, строчную и заглавную буквы.";
        }
        const passwordConfirmation = document.getElementById("password_confirmation").value;
        if (password && password !== passwordConfirmation) {
          errors.password_confirmation = "Пароли не совпадают.";
        }
        const confirm = document.getElementById("confirm").checked;
        if (!confirm) {
          errors.confirm = "Необходимо подтвердить согласие на обработку персональных данных.";
        }

        // Вывод ошибок
        document.getElementById("nameError").textContent = errors.name || "";
        document.getElementById("phoneError").textContent = errors.phone || "";
        document.getElementById("emailError").textContent = errors.email || "";
        document.getElementById("passwordError").textContent = errors.password || "";
        document.getElementById("passwordConfirmError").textContent = errors.password_confirmation || "";
        document.getElementById("confirmError").textContent = errors.confirm || "";

        if (Object.keys(errors).length === 0) {
          alert("Объявление успешно добавлено!");
        }
      });
    }
  }, []);
    return (  
        
<div>
  <div className="container mt-5">
    <h2>Форма добавления нового объявления</h2>
    <form id="animalForm" noValidate>
      {/* Имя пользователя */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Имя пользователя</label>
        <input type="text" className="form-control" id="name" name="name" required pattern="^[а-яА-ЯёЁ\s-]+$" />
        <div className="text-danger" id="nameError" />
      </div>
      {/* Телефон */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Телефон</label>
        <input type="tel" className="form-control" id="phone" name="phone" required pattern="^\+?\d+$" />
        <div className="text-danger" id="phoneError" />
      </div>
      {/* Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" required />
        <div className="text-danger" id="emailError" />
      </div>
      {/* Регистрация */}
      <div className="mb-3">
        <label htmlFor="register" className="form-check-label">Автоматическая регистрация</label>
        <input type="checkbox" className="form-check-input" id="register" name="register" />
      </div>
      {/* Пароль и подтверждение пароля */}
      <div id="passwordFields" className="d-none">
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Пароль</label>
          <input type="password" className="form-control" id="password" name="password" required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$" />
          <div className="text-danger" id="passwordError" />
        </div>
        <div className="mb-3">
          <label htmlFor="password_confirmation" className="form-label">Подтверждение пароля</label>
          <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" required />
          <div className="text-danger" id="passwordConfirmError" />
        </div>
      </div>
      {/* Фото */}
      <div className="mb-3">
        <label htmlFor="photo1" className="form-label">Фото 1</label>
        <input type="file" className="form-control" id="photo1" name="photo1" required accept="image/*" />
        <div className="text-danger" id="photo1Error" />
      </div>
      {/* Фото 2 */}
      <div className="mb-3">
        <label htmlFor="photo2" className="form-label">Фото 2</label>
        <input type="file" className="form-control" id="photo2" name="photo2" accept="image/*" />
      </div>
      {/* Фото 3 */}
      <div className="mb-3">
        <label htmlFor="photo3" className="form-label">Фото 3</label>
        <input type="file" className="form-control" id="photo3" name="photo3" accept="image/*" />
      </div>
      {/* Клеймо */}
      <div className="mb-3">
        <label htmlFor="mark" className="form-label">Клеймо (необязательно)</label>
        <input type="text" className="form-control" id="mark" name="mark" />
      </div>
      {/* Описание */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Описание</label>
        <textarea className="form-control" id="description" name="description" defaultValue={""} />
      </div>
      {/* Согласие на обработку персональных данных */}
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="confirm" name="confirm" defaultValue={1} required />
        <label className="form-check-label" htmlFor="confirm">Согласие на обработку персональных данных</label>
        <div className="text-danger" id="confirmError" />
      </div>
      <button type="submit" className="btn btn-primary w-100">Добавить объявление</button>
      <br />
      <br />
    </form>
  </div>
  <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="loginModalLabel">Вход</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
        </div>
        <div className="modal-body">
          <form id="loginForm" noValidate>
            <div className="mb-3">
              <label htmlFor="loginInput" className="form-label">
                <i className="bi bi-person" /> Логин
              </label>
              <input type="text" className="form-control" id="loginInput" placeholder="Введите логин" pattern="^[a-zA-Z0-9]+$" required />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                <i className="bi bi-lock" /> Пароль
              </label>
              <input type="password" className="form-control" id="passwordInput" placeholder="Введите пароль" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{7,}$" minLength={7} required />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Запомнить меня</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Войти</button>
          </form>
          <div className="mt-3 text-center">
            <a href="#" data-bs-toggle="modal" data-bs-target="#registrationModal">Регистрация</a> | <a href="#">Забыли пароль?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




    );
}



export default Form;
