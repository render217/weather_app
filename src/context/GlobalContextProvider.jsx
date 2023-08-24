import React, { createContext, useContext, useState } from "react";
import { getFormatedDate } from "../util/helper";

const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {
  const [isSearch, setIsSearch] = useState(false);

  const [searchData, setSearchData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [currentForecast,setCurrentForecast] = useState({});
  const [selectedHighlightTitle,setSelectedHighlightTitle] = useState("Today's")
  const toggleSearch = () => setIsSearch(!isSearch);
  const [currentCity,setCurrentCity] = useState({});
  
  const resestData = ()=>{
    setSearchData([]);
    setForecastData([]);
    setCurrentCity('')
    setCurrentForecast({});
    setSelectedHighlightTitle("Today's")
  }
  const setForecast = (data) =>{
    setCurrentCity(data.city);
    setForecastData(data.weather_data)
    setCurrentForecast(data.weather_data[0]);
    // setSelectedHighlightTitle(getFormatedDate(data.dt_txt))
  }
  const value = {
    isSearch,
    searchData,
    forecastData,
    currentCity,
    currentForecast,
    selectedHighlightTitle,
    setIsSearch,
    setForecast,
    setCurrentForecast,
    setSelectedHighlightTitle,
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
