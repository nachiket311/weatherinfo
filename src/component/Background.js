import React from "react";
import Loader from "./Loader";

export default function Background({ loading, wdata, city }) {
  const hasWeatherData = wdata && wdata.length > 0;

  return (
    <div className="background-container">
      <div
        className="w-100 d-flex align-items-center justify-content-center position-absolute background responsive-bg-height"
      >
        {!city ? (
          <h1 className="text-white">Please Enter a City Name</h1>
        ) : loading ? (
          <Loader />
        ) : hasWeatherData ? (
          <div className="bg-transparent rounded border blurry position-absolute d-flex align-items-center justify-content-center p-5 mb-md-0 mb-60 weather-card">
            <div className="d-flex text-white align-items-center justify-content-around flex-column">
              <h4>Weather in {wdata[0].name}</h4>
              <div className="d-flex">
                <h5>Temperature:</h5>
                <p>{wdata[0].main.temp}°C</p>
              </div>
              <div className="d-flex">
                <h5>Humidity:</h5>
                <p>{wdata[0].main.humidity}%</p>
              </div>
              <div className="d-flex">
                <h5>Wind Speed:</h5>
                <p>{wdata[0].wind.speed} m/sec</p>
              </div>
            </div>
          </div>
        ) : (
          <h4 className="text-white text-center">Please Enter the City Name to Know About it's Weather.</h4>
        )}
      </div>
    </div>
  );
}
