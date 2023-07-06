import React from "react";
import "./weatherCard.style.css";

import { getTodayDay } from "../../utils/helperFunctions";
import { monthName } from "../../utils/helperFunctions";

function WeatherCard(props) {
  const {
    city,
    temperature,
    description,
    feelsLikeTemp,
    humidity,
    wind,
    iconId,
    minTemp,
    maxTemp,
    pressure,
  } = props;
  console.log(iconId);

  return (
    <>
      <div className="weather-card">
        <div className="cityIcon">
          <h1>{city}</h1>
          <p className="tempNum">{temperature.toFixed(0)} ‎°F</p>
          <img
            src={`https://openweathermap.org/img/wn/${iconId}@2x.png`}
            alt="icon"
          />
          <p>Low: {minTemp.toFixed(0)} ‎°F</p>
          <p>High: {maxTemp.toFixed(0)} ‎°F</p>
        </div>
        <div className="feelsLikeContainer">
          <p>{description.toUpperCase()}</p>
          <p className="flsLike"> Feels like: {feelsLikeTemp.toFixed(0)} ‎°F</p>
          <p>Happy {getTodayDay()}</p>
          <p>It is {monthName()}</p>
        </div>
      </div>
      <div className="infoList">
        <ul>
          <li>Humidity: {humidity} %</li>
          <li>Wind Speed: {wind} mph</li>
          <li>Pressure: {pressure} in</li>
        </ul>
      </div>
    </>
  );
}

export default WeatherCard;
