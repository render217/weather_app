import React, { useEffect } from "react";
import Current from "./components/Current/Current";
import Dashboard from "./components/Dashboard/Dashboard";
import { useGlobalState } from "./context/GlobalContextProvider";
import Sidebar from "./components/Current/Sidebar";
import { fetchForecastData } from "./api/api";


const App = () => {
  const { isSearch, setIsSearch,setForecast,resestData } = useGlobalState();
  const closeSearch = (e) =>{
    setIsSearch(false)
  }
  useEffect(()=>{
    async function starter(){
      try {
        const data = await fetchForecastData({lat:8.9838666,lon:38.7507773});
        setForecast(data);
      } catch (error) {
        resestData();
      }
    }
    starter();
  },[])
  return (
    <div>
      <main className="main-layout">
        <div className="side-content">
          {isSearch ? <Sidebar /> : <Current />}
        </div>
        <div className="main-content" onClick={closeSearch}>
          <Dashboard />
        </div>
      </main>
    </div>
  );
};

export default App;
