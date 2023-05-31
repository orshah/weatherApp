import axios from "axios";
import "./weatherApp.style.css";
import { useState } from "react";
import WeatherCard from "../weatherCard/WeatherCard";

import React from "react";

function WeatherApp() {
  const [temperature, setTemperature] = useState(0);
  const [description, setDescription] = useState("");
  const [feelsLikeTemp, setFeelsLikeTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [icon, setIcon] = useState("");
  const [minTemp, setminTemp] = useState(0);
  const [maxTemp, setmaxTemp] = useState(0);

  const onClickHandler = async () => {
    console.log("search", searchCity);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=imperial&appid=355cf3bff397cfe55bf144d10da9b2d8`
      );
      console.log(response);

      const { data } = response;

      setTemperature(data.main.temp);
      setFeelsLikeTemp(data.main.feels_like);
      setDescription(data.weather[0].description);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setCity(data.name);
      setIcon(data.weather[0].icon);
      setminTemp(data.main.temp_min);
      setminTemp(data.main.temp_max);
    } catch (error) {
      console.log("error");
    }
  };

  const onChangeHandler = (e) => {
    setSearchCity(e.target.value);
  };

  return (
    <div className="weather-container">
      <WeatherCard
        onClick={onClickHandler}
        onChange={onChangeHandler}
        temperature={temperature}
        minTemp={minTemp}
        maxTemp={maxTemp}
        city={city}
        description={description}
        feelsLikeTemp={feelsLikeTemp}
        humidity={humidity}
        wind={wind}
        value={searchCity}
        iconId={icon}
      />
    </div>
  );
}

export default WeatherApp;
