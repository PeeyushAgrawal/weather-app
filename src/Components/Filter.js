import React, {useState} from 'react';

const Filter = ({changeUnit, changeSpeed}) => {
  const [currentUnit, setCurrentUnit] = useState("Celsius");
  const handleButtonClick = () => {
    if (currentUnit === "Celsius") {
        setCurrentUnit('Fahrenheit');
        changeUnit('imperial');
        changeSpeed('miles/hour');
    } else {
        setCurrentUnit('Celsius');
        changeSpeed('metre/sec');
        changeUnit('metric');
    }
  }
  
  return (
    <div className="search">
      <button className="filter-button" onClick={handleButtonClick}>
        {currentUnit}
        </button>
    </div>
  );
}

export default Filter;
