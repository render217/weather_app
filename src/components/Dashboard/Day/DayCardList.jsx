import React from "react";
import DayCard from "./DayCard";
import { useGlobalState } from "../../../context/GlobalContextProvider";

import DayCardSkeleton from "./DayCardSkeleton";
const DayCardList = () => {
  const { forecastData } = useGlobalState();
  // console.log(forecastData);
  return (
    <div className="day-card-list">
      {forecastData &&
        forecastData.length > 0 &&
        forecastData.map((data) => <DayCard data={data} key={data.dt} />)}
      {forecastData.length === 0 && (
        <DayCardSkeleton cards={5} />
      )}
    </div>
  );
};

export default DayCardList;
