import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {
  const [isSearch, setIsSearch] = useState(false);

  const [searchData, setSearchData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [currentForecast,setCurrentForecast] = useState({});
  const toggleSearch = () => setIsSearch(!isSearch);
  const [currentCity,setCurrentCity] = useState({});
  
  const resestData = ()=>{
    setSearchData([]);
    setForecastData([]);
    setCurrentCity('')
    setCurrentForecast({})
  }
  const setForecast = (data) =>{
    setCurrentCity(data.city);
    setForecastData(data.weather_data.slice(1))
    setCurrentForecast(data.weather_data[0]);

  }
  const value = {
    isSearch,
    searchData,
    forecastData,
    currentCity,
    currentForecast,
    setForecast,
    setCurrentForecast,
    setSearchData,
    toggleSearch,
    resestData
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  return context;
};
