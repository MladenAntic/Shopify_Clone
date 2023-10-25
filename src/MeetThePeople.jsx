import React, { useEffect, useRef } from "react";
import topLeftImg from "./assets/top-left.jfif";
import leftImg from "./assets/left.jfif";
import bottomLeftImg from "./assets/bottom-left.avif";
import topRightImg from "./assets/top-right.avif";
import rightImg from "./assets/right.avif";
import bottomRightImg from "./assets/bottom-right.jfif";

const MeetThePeople = () => {
  const gradientTextRef = useRef(null);
  const meetThePeopleRef = useRef(null);

  useEffect(() => {
    gradientTextRef.current.style.background =
      "linear-gradient(to right, #15c064, #00d1ff)";
    gradientTextRef.current.style.webkitBackgroundClip = "text";
    gradientTextRef.current.style.webkitTextFillColor = "transparent";

    meetThePeopleRef.current.style.boxShadow =
      "0rem 0rem 3.125rem 6.25rem rgba(228,243,252,0.75)";
    meetThePeopleRef.current.style.webkitBoxShadow =
      "0rem 0rem 3.125rem 6.25rem rgba(228,243,252,0.75)";
    meetThePeopleRef.current.style.mozBoxShadow =
      "0rem 0rem 3.125rem 6.25rem rgba(228,243,252,0.75)";
  });

  return (
    <section className="mt-[12.5rem] max-md:hidden">
      <div className="wrapper flex items-center justify-center relative">
        <div
          ref={meetThePeopleRef}
          className="text-center bg-[rgba(228,243,252,0.75)] rounded-full"
        >
          <h5 className="font-bold mb-[1.875rem] max-lg:text-sm">MERCHANT OBSESSED</h5>
          <h2 className="text-[5rem] font-bold leading-tight max-xl:text-[4rem] max-lg:text-[3rem]">
            Meet <br /> the people <br /> who chose <br />{" "}
            <span ref={gradientTextRef}>Shopify</span>
          </h2>
        </div>

        <img
          src={topLeftImg}
          alt="Top Left Image"
          className="absolute top-[-3.125rem] left-[12.5rem] rounded-xl"
        />
        <img
          src={leftImg}
          alt="Left Image"
          className="absolute left-[3.125rem] top-[6.25rem] rounded-xl"
        />
        <img
          src={bottomLeftImg}
          alt="Bottom Left Image"
          className="absolute left-[6.25rem] bottom-[-3.125rem] max-lg:left-[4.6875rem] max-lg:bottom-[-9.375rem]"
        />
        <img
          src={topRightImg}
          alt="Top Right Image"
          className="absolute right-[9.375rem] top-[-6.25rem] max-lg:right-[6.25rem]"
        />
        <img
          src={rightImg}
          alt="Right Image"
          className="absolute right-[0rem] top-[6.25rem]"
        />
        <img
          src={bottomRightImg}
          alt="Botom Right Image"
          className="absolute right-[12.5rem] bottom-[-3.125rem] rounded-xl max-lg:bottom-[-7.8125rem]"
        />
      </div>
    </section>
  );
};

export default MeetThePeople;
