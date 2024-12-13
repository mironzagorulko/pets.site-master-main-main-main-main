import { useEffect, useState } from "react";

function Account() {
    let [user, setUser] = useState({});

    useEffect(() => load(), []);

    function load() {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.authToken);
        const requestOptions = {
            method: "GET",
            headers: myHeaders
        };

        fetch("https://pets.сделай.site/api/users", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const today = new Date();
                const registrationDate = new Date(result.registrationDate);
                const delta = Math.floor(
                    (today - registrationDate) / (1000 * 60 * 60 * 24)
                );

                setUser({ ...result, delta });
            });
    }

    return (
        <section className="card">
            <h3>Информация о пользователе</h3>
            <p>
                <strong>Имя:</strong> {user.name}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <p>
                <strong>Телефон:</strong> {user.phone}
            </p>
            <p>
                <strong>Дата регистрации:</strong> {user.registrationDate}
            </p>
            <p>
                <strong>Количество дней с регистрации:</strong> {user.delta}
            </p>
            <p>
                <strong>Количество объявлений:</strong> {user.countOrder}
            </p>
            <p>
                <strong>Количество найденных животных:</strong> {user.countPets}
            </p>
            <button className="logout-btn" onClick={user.onLogout}>
                Выйти
            </button>
        </section>
    );
}

export default Account;
