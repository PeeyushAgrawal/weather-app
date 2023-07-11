import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

function WeatherAndForecast({ weatherInfo, errorMessage, location, speedUnit }) {
  if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  }
  if (weatherInfo) { 
    const date = dateBuilder(new Date());
    function dateBuilder(d) {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
  
      const date = [];
  
      for (let count = 0; count < 7; count++) {
        if (d.getDay() + count < 7) date[count] = d.getDay() + count;
        else if (d.getDay() + count === 7) date[count] = 0;
        else if (d.getDay() + count === 8) date[count] = 1;
        else if (d.getDay() + count === 9) date[count] = 2;
        else if (d.getDay() + count === 10) date[count] = 3;
        else if (d.getDay() + count === 11) date[count] = 4;
        else if (d.getDay() + count === 12) date[count] = 5;
        else if (d.getDay() + count === 13) date[count] = 6;
      }
  
      let finalArray = [];
      date.forEach(element => {
          finalArray.push(days[element]);
      });
      return finalArray;
    }
  
    return (Object.keys(weatherInfo).length) ? (
      <div className="WeatherAndForecast">
          <Weather weatherInfo={weatherInfo.data} location={location} date={date[0]} speedUnit={speedUnit}/>
          <div className="wf-container">
          {weatherInfo.data.daily.map(function(weather, index){
              if (index > 0 && index < 7) {
                  return (<Forecast key={date[index]} weatherInfo={weather} date={date[index]} />)
              } else {
                return ('')
              }
          })}
          </div>
        
      </div>
    ):'';
  }
  return null;
}

export default WeatherAndForecast;
