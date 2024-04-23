import React from "react";

export default function City(props) {
  const { forecast } = props;

  if (!forecast) {
    return null;
  }
  if (forecast.status === "not found") {
    return <p>{forecast.message}</p>;
  }
  const { city, temperature, wind } = forecast;

  return (
    <>
      <ul class="forecast">
        <li>{city}</li>
        <li>Temperature:{temperature.current}°C</li>
        <li>Humidity:{temperature.humidity}</li>
        <li>Wind:{wind.speed}</li>
      </ul>
    </>
  );
}
