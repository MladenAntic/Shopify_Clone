import React, { useEffect, useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FreeTrialMarquee = () => {
  const trackRef = useRef(null);
  const freeTrialRef = useRef(null);

  useEffect(() => {
    freeTrialRef.current.style.background =
      "linear-gradient(to right, #89ffbf, #a4f885, #b3a9fd)";

    trackRef.current.style.animation = "marquee 20s linear infinite";
  });

  return (
    <a
      href="#"
      ref={freeTrialRef}
      className="h-[5rem] mb-[9.375rem] flex items-center justify-center relative overflow-x-hidden max-w-[100%] w-[100vw]"
    >
      <div
        ref={trackRef}
        className="track absolute whitespace-nowrap will-change-transform"
      >
        <div className="text-[2rem] flex items-center justify-center gap-[1.875rem] font-bold max-md:text-[1.25rem]">
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
          START YOUR FREE TRIAL <ArrowForwardIcon />
        </div>
      </div>
    </a>
  );
};

export default FreeTrialMarquee;
