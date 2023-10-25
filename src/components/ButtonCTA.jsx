import React, { useRef, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "animate.css";

const ButtonCTA = ({text}) => {
  const startSellingBtnRef = useRef(null);
  const arrowStart = useRef(null);
  const arrowEnd = useRef(null);
  const buttonTextRef = useRef(null);

  useEffect(() => {
    startSellingBtnRef.current.addEventListener("mouseover", () => {
      arrowEnd.current.classList.add("animate__animated");
      arrowEnd.current.classList.add("animate__fadeOutRight");

      arrowStart.current.style.display = "flex";
      buttonTextRef.current.classList.add("animate__animated");
      buttonTextRef.current.classList.add("animate__slideInLeft");
    });
    startSellingBtnRef.current.addEventListener("mouseout", () => {
      arrowEnd.current.classList.remove("animate__animated");
      arrowEnd.current.classList.remove("animate__fadeOutRight");

      arrowStart.current.style.display = "none";
      buttonTextRef.current.classList.remove("animate__animated");
      buttonTextRef.current.classList.remove("animate__slideInLeft");
    });
  });
  return (
    <a
      href="#"
      ref={startSellingBtnRef}
      className="font-semibold w-[325px] flex items-center justify-between border-b-2 border-black pb-[20px]"
    >
      <div className="flex-1 text-left flex items-center gap-[5px]">
        <div
          ref={arrowStart}
          className="hidden animate__animated animate__fadeInLeft"
        >
          <ArrowForwardIcon />
        </div>
        <span ref={buttonTextRef}>{text}</span>
      </div>
      <div ref={arrowEnd}>
        <ArrowForwardIcon />
      </div>
    </a>
  );
};

export default ButtonCTA;
