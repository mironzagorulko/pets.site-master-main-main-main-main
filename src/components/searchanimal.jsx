import React, { useState } from "react"; 

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [district, setDistrict] = useState(""); // Состояние для района

  const handleSearch = (event) => {
    event.preventDefault();
    const animalCards = document.querySelectorAll(".animal-card");

    animalCards.forEach((card) => {
      const animalName = card.querySelector(".card-title").textContent.toLowerCase();
      const animalDistrict = card.querySelector(".card-district")?.textContent.toLowerCase(); // Допустим, это элемент с районом

      // Фильтрация по имени и району
      const isNameMatch = animalName.includes(searchTerm.toLowerCase());
      const isDistrictMatch = animalDistrict?.includes(district.toLowerCase()) || !district; // Если район не выбран, показываем все

      card.style.display = isNameMatch && isDistrictMatch ? "block" : "none";
    });
  };

  return (
    <div className="container my-4">
      <form className="d-flex justify-content-center" onSubmit={handleSearch}>
        <input
          id="animalSearchInput"
          className="form-control w-50 me-2"
          type="text"
          placeholder="Введите имя животного"
          aria-label="Поиск по животным"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ backgroundColor: "#FFFFF", color: "black" }}
        />
        
        <input
          id="districtSearchInput"
          className="form-control w-50 me-2"
          type="text"
          placeholder="Введите район"
          aria-label="Поиск по району"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          style={{ backgroundColor: "#FFFFF", color: "black" }}
        />

        <button className="btn btn-primary" type="submit">
          Поиск
        </button>
      </form>
    </div>
  );
}

export default Search;
