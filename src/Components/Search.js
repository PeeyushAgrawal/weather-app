import React, {useState} from 'react';

const Search = ({searchCity}) => {
  const [currentCity, setCurrentCity] = useState("");
    const handleInputChange = (event) => {
    setCurrentCity(event.target.value);
  }
  
  const handleButtonClick = () => {
    if (currentCity.trim() === "") return;
    searchCity(currentCity);
  }
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        handleButtonClick();
    } 
  }

  return (
    <div className="search">
        <label className="search-label">
        <input className="search-input"
            value={currentCity}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
        />
        </label>
        <button className="search-button" onClick={handleButtonClick}>
        Search
        </button>
    </div>
  );
}

export default Search;
