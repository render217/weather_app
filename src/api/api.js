import { getFiveDaysForecast } from "../util/helper";

const API_KEY = "26f528246be87f33239914ec35a3dd51";
const LOCATION_URL = `https://api.openweathermap.org/geo/1.0/direct?appid=${API_KEY}`;
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// &limit=5&`;
export const fetchLatandLong = async (search_location) => {
  const url = `${LOCATION_URL}&q=${search_location}&limit=2`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Couldn't found any location");
  }
  const data = await response.json();
  return data;
};

export const fetchForecastData = async({lat,lon}) =>{
    const url = `${FORECAST_URL}&lat=${lat}&lon=${lon}`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Something gone wrong");
    }
    const data = await response.json();
    const fiveDayForecast = getFiveDaysForecast(data);
    return fiveDayForecast;
}
