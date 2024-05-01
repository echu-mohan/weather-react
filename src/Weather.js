import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import City from "./City";
import Forecast from "./Forecast";

const API_KEY = "b2a5adcct04b33178913oc335f405433";

export default function Weather() {
  let [city, setCity] = useState("");
  let [time, setTime] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecatData, setForecastData] = useState([]);
  const now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  function setCurrentTime() {
    let minute = now.getMinutes();
    if (now.getMinutes() <= 9) {
      minute = `0:${now.getMinutes()}`;
    }
    setTime(`${now.getHours()}:${minute}`);
  }
  const getWeather = async () => {
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${API_KEY}&units=metric`;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${API_KEY}&units=metric`;
    const weatherResponse = await axios.get(url);
    const response = await axios.get(apiUrl);

    setCurrentTime();
    setWeather(weatherResponse.data);
    setForecastData(response.data.daily);
  };

  function handleSubmit(event) {
    console.log("test2");
    event.preventDefault();
    getWeather();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  console.log("test");
  return (
    <div className="container">
      <header>
        <div className=" align-center day-and-time">
          <span className="text-large">{time}</span>
          <span className="text-large">{day}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <City weather={weather} />
      <Forecast response={forecatData} />
    </div>
  );
}
