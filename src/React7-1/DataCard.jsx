import { useState } from "react";

export const DataCard = ({ weather }) => {
  const [isShow, setIsShow] = useState(false);
  const handleConversion = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <h1>
        Temperature:
        <span>
          {isShow
            ? Math.round((weather.temperature * 9) / 5 + 32)
            : weather.temperature}{" "}
          <span>{isShow ? "°F" : "°C"}</span>{" "}
        </span>
      </h1>
      <h2>
        Humidity:<span>{weather.humidity}%</span>
      </h2>
      <h2>
        windSpeed:<span>{weather.windSpeed} km/h</span>
      </h2>
      <button onClick={handleConversion}>
        Switch to <span>{isShow ? "Celcius" : "Fahrenheit"}</span>
      </button>
    </div>
  );
};
