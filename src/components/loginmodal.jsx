import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

function LoginModal() {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Используем useNavigate

  const validateForm = () => {
    const newErrors = {};
    if (!formData.login.match(/^[a-zA-Z0-9]+$/)) {
      newErrors.login = 'Логин должен содержать только английские буквы и цифры.';
    }
    if (!formData.password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{7,}$/)) {
      newErrors.password = 'Пароль должен быть не менее 7 символов и содержать хотя бы одну заглавную букву, одну строчную и одну цифру.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Вход успешен!');
      navigate('/owner'); // Переход на страницу /owner после успешной валидации
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Вход</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
          </div>
          <div className="modal-body">
            <form id="loginForm" noValidate onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="loginInput" className="form-label">
                  <i className="bi bi-person" /> Логин
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.login ? 'is-invalid' : ''}`}
                  id="loginInput"
                  name="login"
                  placeholder="Введите логин"
                  value={formData.login}
                  onChange={handleChange}
                  pattern="^[a-zA-Z0-9]+$"
                  required
                />
                {errors.login && <div className="invalid-feedback">{errors.login}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  <i className="bi bi-lock" /> Пароль
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="passwordInput"
                  name="password"
                  placeholder="Введите пароль"
                  value={formData.password}
                  onChange={handleChange}
                  pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{7,}$"
                  minLength={7}
                  required
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="rememberMe">Запомнить меня</label>
              </div>
              <button type="submit" className="btn btn-primary w-100">Войти</button>
            </form>
            <div className="mt-3 text-center">
              <a href="#" data-bs-toggle="modal" data-bs-target="#registrationModal">Регистрация</a>{' '} | <a href="#">Забыли пароль?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
