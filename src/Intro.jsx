import React, { useRef, useEffect } from "react";
import video from "./assets/intro-video.mp4";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Intro = () => {
  const shopifyStoryRef = useRef(null);

  useEffect(() => {
    shopifyStoryRef.current.style.backdropFilter =
      "blur(0.3125rem) brightness(90%)";
  });
  return (
    <section className="h-[100vh] flex items-center justify-start">
      <video
        src={video}
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-fill"
      ></video>

      <div className="wrapper relative">
        <div className="text-white mt-[-1.875rem] max-md:mt-[-14.0625rem]">
          <h1 className="text-[3rem] font-bold mb-[1.875rem] leading-tight max-lg:text-[2.5rem] max-md:text-[2rem] max-md:mb-[0.9375rem]">
            Making Commerce Better for <br className="max-md:hidden" /> Everyone
          </h1>
          <p className="text-xl max-lg:text-lg max-md:text-base">
            Shopify is supporting the next generation of entrepreneurs, the
            world’s biggest <br className="max-md:hidden" /> brands, and
            everyone in between.
          </p>
        </div>

        <div className="absolute w-full bottom-[-15.625rem] text-white flex items-center justify-between max-lg:items-start max-lg:gap-[1.25rem] max-md:flex-col max-md:bottom-[-12.5rem]">
          <div className="flex items-center gap-[1.25rem] max-lg:flex-col max-lg:flex-[0.5] max-md:w-full">
            <button className="bg-white text-black font-bold py-[0.625rem] px-[1.25rem] rounded-full max-lg:w-full hover:bg-transparent hover:outline hover:text-white duration-300">
              Start free trail
            </button>
            <span className="text-sm max-md:mt-[-0.625rem] max-md:text-center">
              Start for free, then get your <br className="max-lg:hidden" />{" "}
              first 3 months for $1/mo.
            </span>
          </div>

          <div
            ref={shopifyStoryRef}
            className="flex items-center justify-center gap-[0.625rem] py-[0.9375rem] px-[1.875rem] rounded-full cursor-pointer border max-lg:flex-[0.5] max-lg:py-[0.625rem] max-lg:px-[1.25rem] max-md:w-full hover:bg-white hover:text-black duration-300"
          >
            <div>
              <PlayArrowIcon />
            </div>
            <span>Watch the Shopify Story</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
