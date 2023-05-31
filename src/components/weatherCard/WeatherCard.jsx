import React from "react";
import "./weatherCard.style.css";

function WeatherCard(props) {
  const {
    onClick,
    city,
    temperature,
    description,
    feelsLikeTemp,
    humidity,
    wind,
    onChange,
    value,
    iconId,
    minTemp,
    maxTemp,
  } = props;
  console.log(iconId);
  return (
    <>
      <div className="inputBtn">
        <input
          placeholder="Search for city"
          onChange={onChange}
          value={value}
        />
        <button onClick={onClick}>Get the weather</button>
      </div>
      <div className="weather-card">
        <div className="cityIcon">
          <h1>{city}</h1>
          <p>{temperature} F</p>
          <img
            src={`https://openweathermap.org/img/wn/${iconId}@2x.png`}
            alt="icon"
          />
          <p>Min{minTemp}</p>
          <p>Max{maxTemp}</p>
        </div>
        <div className="feelsLike">
          <p>{description}</p>
          <p>Feels like: {feelsLikeTemp}</p>
        </div>
        <div className="infoList">
          <ul>
            <li>Humidity: {humidity}</li>
            <li>Wind Speed: {wind}</li>
            <li>Humidity: {humidity}</li>
            <li>Wind Speed: {wind}</li>
            <li>Wind Speed: {wind}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
