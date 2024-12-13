import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const AnimalDetails = () => {
  const { id } = useParams(); 
  const [animal, setAnimal] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.animal) {
      setAnimal(location.state.animal);
    } else {
      fetch(`https://pets.сделай.site/api/pets/${id}`)
        .then((response) => response.json())
        .then((result) => {
          setAnimal(result);
        });
    }
  }, [id, location.state]);

  if (!animal) return <div>Загрузка...</div>;

  // Если есть несколько фотографий, создаем массив
  const images = Array.isArray(animal.photos) ? animal.photos : [animal.photos];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Информация о животном</h1>
      <div className="d-flex flex-column shadow-lg rounded p-4" style={{ backgroundColor: '#f9f9f9' }}>
        {/* Отображаем все фотографии */}
        <div className="mb-4">
          {images.map((photo, index) => (
            <img
              key={index}
              src={'https://pets.xn--80ahdri7a.site' + photo}
              className="rounded mb-3"
              alt={`Рисунок ${animal.kind}`}
              style={{
                width: '30%', // Чтобы картинка не растягивалась по ширине
                height: '30%', // Сохраняем пропорции
                maxHeight: '900px', // Ограничиваем максимальную высоту
                objectFit: 'cover', // или 'contain' для сохранения пропорций
              }}
            />
          ))}
        </div>

        <div>
          <h4 className="text-primary">{animal.kind}</h4>
          <p className="text-muted">{animal.description}</p>
          <ul className="list-unstyled">
            <li><strong>ID:</strong> {animal.id}</li>
            <li><strong>Телефон:</strong> {animal.phone}</li>
            <li><strong>Имя нашедшего:</strong> {animal.name}</li>
            <li><strong>Номер чипа:</strong> {animal.mark}</li>
            <li><strong>Район:</strong> {animal.district}</li>
            <li><strong>Дата:</strong> {animal.date}</li>
            <li><strong>Email:</strong> {animal.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
