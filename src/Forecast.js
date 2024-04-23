import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import City from "./City";

const API_KEY = "b2a5adcct04b33178913oc335f405433";

export default function Forecast() {
  let [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);

  const getForecast = async () => {
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    setForecast(response.data);
  };

  function handleSubmit(event) {
    console.log("test2");
    event.preventDefault();
    getForecast();
  }

  function updateCity(event) {
    console.log("test1");
    setCity(event.target.value);
  }

  console.log("test");
  return (
    <div className="container">
      <header>
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
            id="search-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <City forecast={forecast} />;
    </div>
  );
}
