import React, { useRef, useState } from "react";
import { useGlobalState } from "../../context/GlobalContextProvider";
import { fetchForecastData, fetchLatandLong } from "../../api/api";
import Loader from "../Loader/Loader";

const Sidebar = () => {
  const { toggleSearch, setSearchData, searchData ,resestData } = useGlobalState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const searchRef = useRef();
  const formHandler = async (e) => {
    e.preventDefault();
    const enteredSearch = searchRef.current.value;
    try {
      setLoading(true);
      setError("");
      const data = await fetchLatandLong(enteredSearch);
      if (data.length === 0) {
        resestData()
        return setError("Enter valid City Name");
      }
      setSearchData(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
      resestData()

    } finally {
      setLoading(false);
    }
    searchRef.current.value = "";
  };

  return (
    <div className="sidebar">
      <div className="container">
        <header>
          <form onSubmit={formHandler}>
            <div className="form-field">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" name="search" ref={searchRef} />
            </div>
            <button>Search</button>
          </form>
        </header>
        <div>
          {error && <p className="error">{error}</p>}
          {loading && <Loader />}
          {searchData && searchData.length > 0 && (
            <ul className="cities">
              {searchData.map((data) => (
                <CityCard
                  key={data.lon}
                  name={data.name}
                  lon={data.lon}
                  lat={data.lat}
                  setLoading={setLoading}
                  setError={setError}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const CityCard = (props) => {
      
  const {setForecast,  resestData, toggleSearch} = useGlobalState();
  const { lon, name, lat, setLoading ,setError} = props;
  const getData = async () => {
    setLoading(true);
    try {
      const data = await fetchForecastData({ lon, lat });
      setForecast(data)
      toggleSearch();
      console.log(data)
    } catch (error) {
      setError(error)
      resestData()
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <li className="city" onClick={getData}>
        <p className="city-title">{name}</p>
        <i className="fa-solid fa-chevron-right"></i>
      </li>
    </>
  );
};
