import React, { useRef, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import poster1 from "./assets/poster1.webp";
import poster2 from "./assets/poster2.jpg";
import poster3 from "./assets/poster3.jpg";
import "animate.css";

const OnlineStore = () => {
  const posterRef = useRef(null);

  const progressBar1Ref = useRef(null);
  const progressBar2Ref = useRef(null);
  const progressBar3Ref = useRef(null);

  const carousel1 = useRef(null);
  const carousel2 = useRef(null);
  const carousel3 = useRef(null);

  const carousel1Content = useRef(null);
  const carousel2Content = useRef(null);
  const carousel3Content = useRef(null);

  useEffect(() => {
    const buttons = document.querySelectorAll(".button");
    const arrows = document.querySelectorAll(".arrow-right");

    const progressBars = document.querySelectorAll(".progress-bar");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mouseover", () => {
        arrows[i].style.display = "flex";
      });
      buttons[i].addEventListener("mouseout", () => {
        arrows[i].style.display = "none";
      });
    }

    let width1 = 1;
    let width2 = 1;
    let width3 = 1;

    let id = setInterval(frame, 50);

    function frame() {
      width1++;
      progressBar1Ref.current.style.width = width1 + "%";
      posterRef.current.src = poster1;
      carousel1Content.current.style.color = "black";

      carousel2Content.current.style.color = "var(--progress-bar)";
      carousel3Content.current.style.color = "var(--progress-bar)";

      function showAllCarousels() {
        carousel1.current.style.display = "block";
        carousel2.current.style.display = "block";
        carousel3.current.style.display = "block";
      }

      function showCarousel1() {
        if (window.innerWidth < 1024) {
          carousel1.current.style.display = "block";

          carousel2.current.style.display = "none";
          carousel3.current.style.display = "none";
        } else {
          showAllCarousels();
        }
      }

      showCarousel1();
      window.addEventListener("resize", showCarousel1());

      if (width1 >= 100) {
        width1 = 100;
        progressBar1Ref.current.style.background = "rgb(209, 213, 219)";
        width2++;
        progressBar2Ref.current.style.width = width2 + "%";
        posterRef.current.src = poster2;
        carousel2Content.current.style.color = "black";

        carousel1Content.current.style.color = "var(--progress-bar)";
        carousel3Content.current.style.color = "var(--progress-bar)";

        function showCarousel2() {
          if (window.innerWidth < 1024) {
            carousel2.current.style.display = "block";

            carousel1.current.style.display = "none";
            carousel3.current.style.display = "none";
          } else {
            showAllCarousels();
          }
        }

        showCarousel2();
        window.addEventListener("resize", showCarousel2());
      }

      if (width2 >= 100) {
        width2 = 100;
        progressBar2Ref.current.style.background = "rgb(209, 213, 219)";
        width3++;
        progressBar3Ref.current.style.width = width3 + "%";
        posterRef.current.src = poster3;
        carousel3Content.current.style.color = "black";

        carousel1Content.current.style.color = "var(--progress-bar)";
        carousel2Content.current.style.color = "var(--progress-bar)";

        carousel2Content.current.style.outline = "none";

        function showCarousel3() {
          if (window.innerWidth < 1024) {
            carousel3.current.style.display = "block";

            carousel1.current.style.display = "none";
            carousel2.current.style.display = "none";
          } else {
            showAllCarousels();
          }
        }

        showCarousel3();
        window.addEventListener("resize", showCarousel3());
      }

      if (width3 >= 100) {
        width1 = 1;
        width2 = 1;
        width3 = 1;

        progressBar1Ref.current.style.background = "var(--progress-gradient)";
        progressBar2Ref.current.style.background = "var(--progress-gradient)";
        progressBar3Ref.current.style.background = "var(--progress-gradient)";

        progressBar1Ref.current.style.width = "0";
        progressBar2Ref.current.style.width = "0";
        progressBar3Ref.current.style.width = "0";

        carousel3Content.current.style.outline = "none";
      }
    }

    carousel1Content.current.addEventListener("click", () => {
      width3 = 100;
      progressBar2Ref.current.style.width = "0";
      progressBar3Ref.current.style.width = "0";

      if (window.innerWidth >= 1024) {
        carousel1Content.current.style.outline =
          "0.125rem solid var(--outline-color)";
      } else {
        carousel1Content.current.style.outline = "none";
      }

      carousel2Content.current.style.outline = "none";
      carousel3Content.current.style.outline = "none";
    });

    carousel2Content.current.addEventListener("click", () => {
      width1 = 100;
      width2 = 1;
      progressBars.forEach((bar) => {
        bar.style.width = "0";
      });

      progressBar2Ref.current.style.background = "var(--progress-gradient)";

      if (window.innerWidth >= 1024) {
        carousel2Content.current.style.outline =
          "0.125rem solid var(--outline-color)";
      } else {
        carousel2Content.current.style.outline = "none";
      }

      carousel1Content.current.style.outline = "none";
      carousel3Content.current.style.outline = "none";
    });

    carousel3Content.current.addEventListener("click", () => {
      width1 = 100;
      width2 = 100;
      width3 = 1;
      progressBar1Ref.current.style.width = "0";
      progressBar2Ref.current.style.width = "0";

      if (window.innerWidth >= 1024) {
        carousel3Content.current.style.outline =
          "0.125rem solid var(--outline-color)";
      } else {
        carousel3Content.current.style.outline = "none";
      }

      carousel1Content.current.style.outline = "none";
      carousel2Content.current.style.outline = "none";
    });

    progressBars.forEach((bar) => {
      bar.style.background = "var(--progress-gradient)";
    });
  });

  return (
    <section className="bg-[#f9fafb] pt-[15.625rem] max-lg:pt-[7.8125rem] pb-[6.25rem]">
      <div className="wrapper">
        <h4 className="text-[#084481] font-semibold mb-[1.5625rem] max-md:text-sm">
          BUILD AN ONLINE STORE
        </h4>

        <h2 className="text-[4rem] font-semibold mb-[1.5625rem] max-lg:text-[3rem] max-md:text-[2rem]">
          Your store, your way
        </h2>
        <div className="h-[33.75rem] rounded-xl mb-[1.875rem]">
          <img ref={posterRef} className="w-full h-full object-cover" alt="Poster Image"></img>
        </div>

        <div className="flex items-start gap-[1.25rem] text-gray-600 max-lg:flex-col relative">
          <div ref={carousel1} className="flex-[0.33]">
            <div className="w-full h-[0.125rem] bg-gray-300 mb-[1.5625rem] relative max-lg:mb-[0]">
              <div
                ref={progressBar1Ref}
                className="progress-bar absolute top-0 left-0 bottom-0 right-0 w-0"
              ></div>
            </div>

            <div
              ref={carousel1Content}
              className="cursor-pointer pt-[1.5625rem] mb-[0.9375rem] rounded-lg duration-75"
            >
              <h3 className="font-bold text-[1.25rem] mb-[0.9375rem] max-md:text-base">
                Build an online storefront
              </h3>
              <p className="max-md:text-sm">
                Bring your vision to life with our drag-and-drop store creator.
                No coding expertise required — just your next big idea.
              </p>
            </div>

            <a
              href="#"
              className="button flex items-center underline font-semibold"
            >
              Online Store Builder
              <div className="animate__animated animate__fadeInLeft duration-75 arrow-right hidden ml-[0.3125rem]">
                <ArrowForwardIcon />
              </div>
            </a>
          </div>

          <div ref={carousel2} className="flex-[0.33]">
            <div className="w-full h-[0.125rem] bg-gray-300 mb-[1.5625rem] relative max-lg:mb-[0]">
              <div
                ref={progressBar2Ref}
                className="progress-bar absolute top-0 left-0 bottom-0 right-0 w-0"
              ></div>
            </div>

            <div
              ref={carousel2Content}
              className="cursor-pointer pt-[1.5625rem] mb-[0.9375rem] rounded-lg duration-75"
            >
              <h3 className="font-bold text-[1.25rem] mb-[0.9375rem] max-md:text-base">
                Craft the brand you want
              </h3>
              <p className="max-md:text-sm">
                Select from customizable templates created by a community of
                world-class designers.
              </p>
            </div>

            <a
              href="#"
              className="button flex items-center underline font-semibold"
            >
              Theme Store
              <div className="animate__animated animate__fadeInLeft duration-75 arrow-right hidden ml-[0.3125rem]">
                <ArrowForwardIcon />
              </div>
            </a>
          </div>

          <div ref={carousel3} className="flex-[0.33]">
            <div className="w-full h-[0.125rem] bg-gray-300 mb-[1.5625rem] relative max-lg:mb-[0]">
              <div
                ref={progressBar3Ref}
                className="progress-bar absolute top-0 left-0 bottom-0 right-0 w-0"
              ></div>
            </div>

            <div
              ref={carousel3Content}
              className="cursor-pointer pt-[1.5625rem] mb-[0.9375rem] rounded-lg duration-75"
            >
              <h3 className="font-bold text-[1.25rem] mb-[0.9375rem] max-md:text-base">
                Level up with apps
              </h3>
              <p className="max-md:text-sm">
                Add more features and functionality to your online store with
                apps built by trusted Shopify developers.
              </p>
            </div>

            <a
              href="#"
              className="button flex items-center underline font-semibold"
            >
              Shopify App Store
              <div className="animate__animated animate__fadeInLeft duration-75 arrow-right hidden ml-[0.3125rem]">
                <ArrowForwardIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineStore;
