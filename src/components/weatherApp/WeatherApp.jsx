import axios from "axios";
import "./weatherApp.style.css";
import { useState } from "react";
import WeatherCard from "../weatherCard/WeatherCard";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
  const [pressure, setPressure] = useState(0);

  const getSearchCity = async () => {
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
      setmaxTemp(data.main.temp_max);
      setPressure(data.main.pressure);
    } catch (error) {
      console.log("error");
    }
  };

  // useEffect(() => {
  //   console.log("Use effect");
  //   getSearchCity();
  // }, []);

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
      setmaxTemp(data.main.temp_max);
      setPressure(data.main.pressure);
    } catch (error) {
      console.log("error");
    }
  };

  const onChangeHandler = (e) => {
    setSearchCity(e.target.value);
  };

  return (
    <div className="weather-container">
      <div className="inputBtn">
        <TextField
          id="outlined-basic"
          className="outlined-basic"
          label="Search for city"
          variant="outlined"
          placeholder="Search for city"
          onChange={onChangeHandler}
          value={searchCity}
        />
        <Button onClick={onClickHandler} variant="outlined">
          Get the weather
        </Button>
      </div>
      <>
        {" "}
        {city && (
          <WeatherCard
            onClick={getSearchCity}
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
            pressure={pressure}
          />
        )}{" "}
      </>
    </div>
  );
}

export default WeatherApp;
