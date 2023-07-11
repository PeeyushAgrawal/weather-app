import './App.css';
import React, { useState} from 'react'
import Header from './Components/Header';
import WeatherAndForecast from './Components/WeatherAndForecast';
import useOpenWheather from './services/useOpenWheather';

const App = () => {
  const [city, setCity] = useState("");
  const [units, setUnit] = useState("metric");
  const [speedUnit, setSpeedUnit] = useState("meter/sec");

  const { data, errorMessage, locationInfo } = useOpenWheather({
    key: 'ae1c4977a943a50eaa7da25e6258d8b2',
    city: city,
    exclude: "minutely,hourly,alerts",
    units: units
  });

  const searchCity = (target) => {
    setCity(target);
  }

  const changeUnit = (unitResult) => {
    setUnit(unitResult);
  }

  const changeSpeed = (speedUnit) => {
    setSpeedUnit(speedUnit);
  }

  return (
    <div className="App">
      <Header searchCity={searchCity} changeUnit={changeUnit} changeSpeed={changeSpeed}></Header>      
      <WeatherAndForecast weatherInfo={data} errorMessage={errorMessage} location={locationInfo} speedUnit={speedUnit}/>
    </div>
  )
}

export default App

