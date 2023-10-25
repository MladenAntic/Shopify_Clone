import React, { useEffect, useRef } from "react";
import globe from "./assets/globe.webp";

const ChooseShopify = () => {
  const gradientTextRef = useRef(null);

  useEffect(() => {
    document.querySelectorAll(".line").forEach((line) => {
      line.style.background = "linear-gradient(to bottom, #01bcdf, #01e1a4)";
    });

    gradientTextRef.current.style.background =
      "linear-gradient(to right, #e6f7f5, #d0ebfe, #f1eefe)";

    const counters = document.querySelectorAll(".counter");

    let scrollStarted = false;

    document.addEventListener("scroll", () => {
      scrollPage();
    });

    function scrollPage() {
      const scrollPos = window.scrollY;

      if (scrollPos > 500 && !scrollStarted) {
        countUp();
        scrollStarted = true;
      } else if (scrollPos < 500 && scrollStarted) {
        reset();
        scrollStarted = false;
      }
    }

    function countUp() {
      counters.forEach((counter) => {
        counter.innerText = "0";

        const updateCounter = () => {
          const target = +counter.getAttribute("data-target");

          const c = +counter.innerText;

          const increment = target / 50;

          if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 75);
          } else {
            counter.innerText = target;
          }
        };

        updateCounter();
      });
    }

    function reset() {
      counters.forEach((counter) => (counter.innerHTML = "0"));
    }
  });

  return (
    <section className="h-[100vh] flex items-center justify-end relative overflow-hidden 2xl:justify-center">
      <img
        src={globe}
        alt="Globe"
        className="absolute w-[46.875rem] left-[-11.5625rem] top-[6.25rem] duration-300 max-md:top-[9.375rem] max-md:left-[50%] max-md:translate-x-[-50%] max-xl:w-[34.375rem] max-lg:w-[29.6875rem] 2xl:left-[-28.125rem] 2xl:w-[125rem]"
      />

      <div className="mr-[10.9375rem] max-xl:mr-[6.25rem] max-lg:mr-[3.125rem] 2xl:mr-0 2xl:ml-[62.5rem]">
        <h2 className="text-[2.5rem] font-bold leading-tight mb-[4.6875rem] max-md:text-[1.5rem] max-md:absolute max-md:top-[4.6875rem] max-md:left-[1.875rem] max-lg:text-[2rem]">
          Discover why millions of <br className="max-md:hidden" />{" "}
          entrepreneurs chose Shopify to <br className="max-md:hidden" /> build
          their business — <br className="max-md:hidden" />{" "}
          <span ref={gradientTextRef} className="bg-clip-text fill-transparent">
            from hello world to IPO.
          </span>
        </h2>

        <div className="max-md:absolute max-md:bottom-0 max-md:left-[50%] max-md:translate-x-[-50%]">
          <div className="flex items-center gap-[10.3125rem] mb-[4.6875rem] max-md:mb-[2.1875rem] max-md:gap-[9.375rem]">
            <div className="flex items-center gap-[1.25rem]">
              <div className="line h-[5.3125rem] w-[0.3125rem]"></div>

              <div>
                <h3 className="text-[2rem] font-semibold mb-[0.3125rem] max-md:text-[1.25rem] max-lg:text-[1.5rem]">
                  Millions
                </h3>
                <span className="max-md:text-[0.75rem] max-lg:text-sm">
                  of merchants worldwide
                </span>
              </div>
            </div>

            <div className="flex items-center gap-[1.25rem]">
              <div className="line h-[5.3125rem] w-[0.3125rem]"></div>

              <div>
                <h3 className="text-[2rem] font-semibold mb-[0.3125rem] max-md:text-[1.25rem] max-lg:text-[1.5rem]">
                  <span className="counter" data-target="170">
                    0
                  </span>
                  +
                </h3>
                <span className="max-md:text-[0.75rem] max-lg:text-sm">
                  countries represented
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[10.9375rem] max-md:gap-[10rem]">
            <div className="flex items-center gap-[1.25rem]">
              <div className="line h-[5.3125rem] w-[0.3125rem]"></div>

              <div>
                <h3 className="text-[2rem] font-semibold mb-[0.3125rem] max-md:text-[1.25rem] max-lg:text-[1.5rem]">
                  <span className="counter" data-target="10">
                    0
                  </span>
                  %
                </h3>
                <span className="max-md:text-[0.75rem] max-lg:text-sm">
                  of total US ecommerce
                </span>
              </div>
            </div>

            <div className="flex items-center gap-[1.25rem]">
              <div className="line h-[5.3125rem] w-[0.3125rem]"></div>

              <div>
                <h3 className="text-[2rem] font-semibold mb-[0.3125rem] max-md:text-[1.25rem] max-lg:text-[1.5rem]">
                  $
                  <span className="counter" data-target="444">
                    0
                  </span>
                  B
                </h3>
                <span className="max-md:text-[0.75rem] max-lg:text-sm">
                  global economic activity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseShopify;
