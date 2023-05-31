import React from "react";

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
  } = props;
  console.log(iconId);
  return (
    <div>
      <input placeholder="Enter city name" onChange={onChange} value={value} />
      <button onClick={onClick}>Get the weather</button>
      <h1>City: {city}</h1>
      <p>Tempreture: {temperature} F</p>
      <p>Description: {description}</p>
      <p>Feels like: {feelsLikeTemp}</p>
      <p>Humidity: {humidity}</p>
      <p>Wind Speed: {wind}</p>
      <img
        src={`https://openweathermap.org/img/wn/${iconId}@2x.png`}
        alt="icon"
      />
    </div>
  );
}

export default WeatherCard;
