import { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect fetch");

    //тіло ефекта
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log("err :>> ", err));
  }, []);

  useEffect(() => {
    console.log("useEffect after change count");
  }, [count]);

  useEffect(() => {
    console.log("useEffect after each render");
  });

  const dec = () => {
    setCount(count - 1);
  };
  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {weather && weather.current.wind_direction_10m}
      {""}
      {weather && weather.current_units.wind_speed_10m}
      <div>{count}</div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default Weather;

// useEffect (()=>{}                    after each render
// useEffect (()=>{}[page,id])          after render,if page or id change
// useEffect (()=>{}=,[])               after first render
//[page,id],[]-список залежності.
