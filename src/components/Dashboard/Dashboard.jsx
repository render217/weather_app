import React from "react";
import DayCardList from "./Day/DayCardList";
import HightLightCardList from "./Highlight/HightLightCardList";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        {/* <div className="option-container">
          <button className="option-1">&deg;C</button>
          <button className="option-2">&deg;F</button>
        </div> */}
        <div className="day-card-list-container">
          <DayCardList />
        </div>
        <div className="highlight-list-container">
          <h2 className="title">Today’s Hightlights</h2>
          <HightLightCardList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
