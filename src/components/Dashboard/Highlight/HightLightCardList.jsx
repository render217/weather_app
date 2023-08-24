import React from "react";
import HighLightCard from "./HighLightCard";
import HighLightCardSkeleton from "./HighLightCardSkeleton";
import { useGlobalState } from "../../../context/GlobalContextProvider";
import { convertMetersToMiles, convertMpsToMph } from "../../../util/helper";

const HightLightCardList = () => {
  const { currentForecast } = useGlobalState();
  console.log(currentForecast);
  return (
    <div className="highlight-list">
      {currentForecast?.main ? (
        <>
          <HighLightCard title="Wind status" value={convertMpsToMph(currentForecast?.wind?.speed)} unit='mph'>
            <div className="flex">
              <i className="fa-solid fa-location-arrow"></i>
              <p>WSW</p>
            </div>
          </HighLightCard>
          <HighLightCard title="Humidity" unit='%' value={currentForecast?.main?.humidity}>
            <progress className="progress" value={currentForecast?.main?.humidity} max="100"></progress>
          </HighLightCard>
          <HighLightCard title="Visibility" value={convertMetersToMiles(currentForecast?.visibility)} unit='miles'/>
          <HighLightCard title="Air Pressure" value={currentForecast?.main?.pressure} unit='mb'/>
        </>
      ) : (
        <HighLightCardSkeleton cards={4} />
      )}
    </div>
  );
};

export default HightLightCardList;
