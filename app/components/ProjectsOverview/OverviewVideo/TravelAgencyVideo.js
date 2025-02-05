import dynamic from "next/dynamic";
import React from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const TravelAgencyVideo = () => {
  return (
    <div>
      <ReactPlayer
        url="/Overview/frontendprojects/travelagency/travelsr.mp4"
        playing={true} // AutoPlay enabled
        muted={true} // Required for autoplay
        loop={true}
        // controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default TravelAgencyVideo;
