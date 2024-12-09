import React, { useState } from 'react';

function RegistrationModal() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: '',
    confirm: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Валидация имени
    if (!formData.name.match(/^[а-яА-ЯёЁ\s-]+$/)) {
      newErrors.name = 'Имя должно содержать только кириллицу, пробелы или дефисы.';
    }

    // Валидация телефона
    if (!formData.phone.match(/^\+?\d+$/)) {
      newErrors.phone = 'Телефон должен содержать только цифры и знак +.';
    }

    // Валидация email
    if (!formData.email.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
      newErrors.email = 'Некорректный формат email.';
    }

    // Валидация пароля
    if (!formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/)) {
      newErrors.password = 'Пароль должен быть не менее 7 символов, содержать цифру, строчную и заглавную буквы.';
    }

    // Валидация подтверждения пароля
    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = 'Пароли не совпадают.';
    }

    // Валидация согласия на обработку данных
    if (!formData.confirm) {
      newErrors.confirm = 'Необходимо согласие на обработку персональных данных.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Действия после успешной валидации
      alert('Форма успешно отправлена!');
      
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
    <div className="modal fade" id="registrationModal" tabIndex={-1} aria-labelledby="registrationModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registrationModalLabel">Регистрация</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
          </div>
          <div className="modal-body">
            <form id="registrationForm" noValidate onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Телефон</label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password_confirmation" className="form-label">Подтверждение пароля</label>
                <input
                  type="password"
                  className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                  id="password_confirmation"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  required
                />
                {errors.password_confirmation && <div className="invalid-feedback">{errors.password_confirmation}</div>}
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className={`form-check-input ${errors.confirm ? 'is-invalid' : ''}`}
                  id="confirm"
                  name="confirm"
                  checked={formData.confirm}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="confirm">Согласие на обработку персональных данных</label>
                {errors.confirm && <div className="invalid-feedback">{errors.confirm}</div>}
              </div>
              <button type="submit" className="btn btn-primary w-100">Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;
