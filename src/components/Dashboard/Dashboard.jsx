import React from "react";
import DayCardList from "./Day/DayCardList";
import HightLightCardList from "./Highlight/HightLightCardList";
import { useGlobalState } from "../../context/GlobalContextProvider";

const Dashboard = () => {
  const {selectedHighlightTitle} = useGlobalState();
  return (
    <div className="dashboard" >
      <div className="container">
        {/* <div className="option-container">
          <button className="option-1">&deg;C</button>
          <button className="option-2">&deg;F</button>
        </div> */}
        <div className="day-card-list-container">
          <DayCardList />
        </div>
        <div className="highlight-list-container">
          <h2 className="title">{selectedHighlightTitle} Hightlights</h2>
          <HightLightCardList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
