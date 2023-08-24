import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalContextProvider";
import Skeleton from "@mui/material/Skeleton";
import { getFormatedDate, getGeoLocation, getImage, kelvinToCelsius } from "../../util/helper";
import Loader from "../Loader/Loader";
import { fetchForecastData } from "../../api/api";
const Current = () => {
  const { toggleSearch, currentForecast, currentCity, setForecast, resestData } = useGlobalState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  let condition = currentForecast?.main === undefined ? null : currentForecast?.weather[0]?.main;
  let date = getFormatedDate(currentForecast?.dt_txt).startsWith('undefined') ? null : getFormatedDate(currentForecast?.dt_txt);
  let cityname = currentCity.name;
  let currentTemp = kelvinToCelsius(currentForecast?.main?.temp) === 'NaN' ? null : kelvinToCelsius(currentForecast?.main?.temp);
  const image = currentForecast?.main === undefined ? null : getImage(currentForecast?.weather[0].main);

  const getMyLocation = async () => {
    const position = await getGeoLocation();
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat,lon)
    setLoading(true);
    try {
      const data = await fetchForecastData({ lon, lat });
      setForecast(data)
    } catch (error) {
      setError(error)
      resestData()
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="current">
      <div className="container">
        <header>
          <div className="search" onClick={toggleSearch}>
            Search for places
          </div>
          <div className="location" onClick={getMyLocation}>
            <i className="fa-solid fa-location-dot"></i>
          </div>
        </header>
        {loading && <Loader />}
        {/* {error && <p className="error">{error}</p>} */}
        <div className="img-container">
          <img className="background-img" alt="" />
          <img src={image || (
            <Skeleton
              variant="circular"
              width={150}
              height={150}
              sx={{ bgcolor: "#333755", marginInline: "auto" }}
            />
          )} alt="" />

        </div>
        <div className="weather-info">
          <div className="title">
            <h1>
              {currentTemp || (
                <Skeleton
                  width={200}
                  variant="text"
                  sx={{ bgcolor: "#333758", marginInline: "auto" }}
                />
              )}
            </h1>

            {currentTemp && <sub>&deg;C</sub>}
          </div>
          <p className="condition">
            {condition || (
              <Skeleton
                width={200}
                variant="text"
                sx={{ bgcolor: "#333758", marginInline: "auto" }}
              />
            )}
          </p>
          <div className="time-info">
            <p>
              {date || (
                <Skeleton
                  width={150}
                  variant="text"
                  sx={{ bgcolor: "#333758" }}
                />
              )}
            </p>
          </div>
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              {cityname || (
                <Skeleton
                  width={50}
                  variant="text"
                  sx={{ bgcolor: "#333758" }}
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
