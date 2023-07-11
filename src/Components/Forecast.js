import React from "react";

export default function Forecast({ weatherInfo, date }) {
  return (
    <div>
      <h3 className="forecast-title">{date}</h3>
      <img className="fw-icon" src={
          "https://openweathermap.org/img/wn/" +
          weatherInfo.weather[0].icon +
          ".png"
        }
        alt={weatherInfo.weather[0].main}
      />
      <div>
        <h3 className="other-info-cloud">{weatherInfo.weather[0].description}</h3>
      </div>
      <div className="f-temperature">
        <span className="t-max">
          {Math.round(weatherInfo.temp.max)}
          <sup className="temperature__symbol">°</sup>
        </span>
        <span className="t-min">
          {Math.round(weatherInfo.temp.min)}
          <sup className="temperature__symbol">°</sup>
        </span>
      </div>
    </div>
  );
}