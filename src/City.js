import React, { useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

const API_KEY = "b2a5adcct04b33178913oc335f405433";

export default function City(props) {
  let [temperature, setTemperature] = useState("");

  const getTemperature = async () => {
    const url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    setTemperature(Math.round(response.data.temperature.current));
  };

  getTemperature();

  if (props.city === "London") {
    return (
      <p class="city">
        The temperature in {props.city} is {temperature}°C else
      </p>
    );
  } else {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
  }
}
