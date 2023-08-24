import React from "react";

import Skeleton from "@mui/material/Skeleton";
const DayCardSkeleton = ({ cards }) => {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((card, i) => (
          <div className="day-card" key={i}>
            <p style={{ backgroundColor: "" }}>
              <Skeleton variant="text" sx={{ bgcolor: "#333758" }} />
            </p>
            <div className="skeleton-img-container" style={{}}>
              <Skeleton
                variant="circular"
                sx={{ bgcolor: "#333758",marginInline:'auto',marginBlock:'10px' }}
                width={60}
                height={60}
              />
            </div>
            <div className="temp-container">
              <p className="temp-max">
                <Skeleton
                  variant="text"
                  width={20}
                  sx={{ bgcolor: "#333758" }}
                />
              </p>
              <p className="temp-min">
                <Skeleton
                  variant="text"
                  width={20}
                  sx={{ bgcolor: "#333758" }}
                />
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default DayCardSkeleton;
