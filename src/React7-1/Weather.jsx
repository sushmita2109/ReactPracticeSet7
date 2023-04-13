import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
import { DataCard } from "./DataCard";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/weather");
      if (res.status === 200) {
        setWeatherData(res.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Weather</h1>

      <DataCard weather={weatherData} />
    </div>
  );
};
