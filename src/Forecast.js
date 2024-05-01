import React from "react";
import "./App.css";

function formatDay(time) {
  let newDate = new Date(time * 1000);
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[newDate.getDay()];
}

export default function Forecast(props) {
  const { response } = props;
  return (
    <div className="forecast">
      {response.map(function (day) {
        return (
          <div className="day">
            <div className="week">{formatDay(day.time)}</div>
            <img
              className="forecast-icon"
              src={day.condition.icon_url}
              alt=""
            />
            <div className="weather-forecast-temperatures">
              <span className="high-temp text-dark-green">
                {Math.round(day.temperature.maximum)}°{" "}
              </span>
              <span className="low-temp text-light-green">
                {Math.round(day.temperature.minimum)}°
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
