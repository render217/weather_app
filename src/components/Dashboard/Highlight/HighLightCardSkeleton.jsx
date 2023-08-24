import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Typography } from "@mui/material";
const HighLightCardSkeleton = ({ cards }) => {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <div className="highlight-card" key={i}>
            <p className="title">
              <Skeleton variant="text" sx={{ bgcolor: "#333758" }} />
            </p>
            <div className="status">
              <h2 className="number">
                <Skeleton
                  variant="rectangular"
                  width={210}
                  height={118}
                  sx={{ bgcolor: "#333758" }}
                />
              </h2>
            </div>

            <Skeleton variant="text" sx={{ bgcolor: "#333758" }} />
          </div>
        ))}
    </>
  );
};

export default HighLightCardSkeleton;
