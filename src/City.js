import React from "react";
import "./App.css";
export default function City(props) {
  const { weather } = props;

  if (!weather) {
    return null;
  }
  if (weather.status === "not found") {
    return <p>{weather.message}</p>;
  }
  const { city, condition, temperature, wind } = weather;

  return (
    <>
      <div className="current-city current-details ">{city}</div>
      <div className="current-details ">{condition.description}</div>
      <div className="current-temp  ">{temperature.current}°C</div>
      <span className="humidity-wind ">
        Humidity: <strong>{temperature.humidity}%</strong>, Wind:{" "}
        <strong>{wind.speed}km/h</strong>
      </span>

      <div className="city-weather common-margin">
        <div>
          <img src={condition.icon_url} alt="cloud" />
        </div>
        <div className="text-large">{city}</div>
        <div className="text-large temp-large">
          <span>{temperature.current}°C</span>
        </div>
        <div className="text-grey common-margin"> {condition.description}</div>
        <div className="common-margin">
          <div>
            <span>Humidity:</span>
            <span className="text-green">{temperature.humidity}%</span>
          </div>
          <div>
            <span>Wind:</span>
            <span className="text-green">{wind.speed}km/h</span>
          </div>
        </div>
      </div>
    </>
  );
}
