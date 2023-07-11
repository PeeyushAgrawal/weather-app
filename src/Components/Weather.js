import React from "react";

export default function Current({ weatherInfo, location, date, speedUnit }) {
  return (
    <div className="Weather">
      <div className="wheather-info">
        <img
          className="wheather-icon"
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.current.weather[0].icon +
            ".png"
          }
          alt={weatherInfo.current.weather[0].main}
        />
        <ul className="wheather-list">
          <li className="list-temperature">
            {Math.round(weatherInfo.current.temp)}
            <sup className="list-temperature-symbol">°</sup>
          </li>
          <li> Humidity: {weatherInfo.current.humidity}% </li>
          <li>
            {" "}
            Wind: {Math.round(weatherInfo.current.wind_speed * 3.6)} {speedUnit}{" "}
          </li>
        </ul>
      </div>
      <div className="wheather-oinfo">
        <h2 className="other-info-city">
          {location.city || location.town},{" "}
          {location.state || location.country.toUpperCase()}
        </h2>
        <h3 className="other-info-cloud">{date}</h3>
        <h3 className="other-info-cloud">
          {weatherInfo.current.weather[0].description}
        </h3>
      </div>
    </div>
  );
}
