import React, { useRef, useEffect } from "react";
import ButtonCTA from "./components/ButtonCTA";
import TagIcon from "@mui/icons-material/Tag";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import leads from "./assets/leads.jpg";
import customers from "./assets/customers.jpg";
import data from "./assets/data.jpg";

const MarketingTools = () => {
  const marketingToolImageRef = useRef(null);

  const progressBar1Ref = useRef(null);
  const progressBar2Ref = useRef(null);
  const progressBar3Ref = useRef(null);

  const progressBars = [progressBar1Ref, progressBar2Ref, progressBar3Ref];

  const carousel1 = useRef(null);
  const carousel2 = useRef(null);
  const carousel3 = useRef(null);

  useEffect(() => {
    let width1 = 1;
    let width2 = 1;
    let width3 = 1;

    let id = setInterval(frame, 50);

    function frame() {
      width1++;
      progressBar1Ref.current.style.width = width1 + "%";
      marketingToolImageRef.current.style.background = `url(${leads}) no-repeat center center/cover`;

      carousel1.current.style.color = "black";

      carousel2.current.style.color = "var(--progress-bar)";
      carousel3.current.style.color = "var(--progress-bar)";

      function showAllCarousels() {
        carousel1.current.style.display = "flex";
        carousel2.current.style.display = "flex";
        carousel3.current.style.display = "flex";
      }

      function showCarousel1() {
        if (window.innerWidth < 1024) {
          carousel1.current.style.display = "flex";

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
        marketingToolImageRef.current.style.background = `url(${customers}) no-repeat center center/cover`;

        carousel2.current.style.color = "black";

        carousel1.current.style.color = "var(--progress-bar)";
        carousel3.current.style.color = "var(--progress-bar)";

        function showCarousel2() {
          if (window.innerWidth < 1024) {
            carousel2.current.style.display = "flex";

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
        marketingToolImageRef.current.style.background = `url(${data}) no-repeat center center/cover`;

        carousel3.current.style.color = "black";

        carousel1.current.style.color = "var(--progress-bar)";
        carousel2.current.style.color = "var(--progress-bar)";

        function showCarousel3() {
          if (window.innerWidth < 1024) {
            carousel3.current.style.display = "flex";

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

        progressBar1Ref.current.style.background = "black";
        progressBar2Ref.current.style.background = "black";
        progressBar3Ref.current.style.background = "black";

        progressBar1Ref.current.style.width = "0";
        progressBar2Ref.current.style.width = "0";
        progressBar3Ref.current.style.width = "0";

        carousel3.current.style.outline = "none";
      }

      carousel1.current.addEventListener("click", () => {
        width3 = 100;
        progressBar2Ref.current.style.width = "0";
        progressBar3Ref.current.style.width = "0";

        if (window.innerWidth >= 1024) {
          carousel1.current.style.outline = "0.125rem solid var(--outline-color)";
        } else {
          carousel1.current.style.outline = "none";
        }

        carousel1.current.style.color = "black";

        carousel2.current.style.outline = "none";
        carousel3.current.style.outline = "none";
        carousel2.current.style.color = "var(--progress-bar)";
        carousel3.current.style.color = "var(--progress-bar)";
      });

      carousel2.current.addEventListener("click", () => {
        width1 = 100;
        width2 = 1;

        progressBars.forEach((bar) => {
          bar.current.style.width = "0";
        });

        progressBar2Ref.current.style.background = "black";

        if (window.innerWidth >= 1024) {
          carousel2.current.style.outline = "0.125rem solid var(--outline-color)";
        } else {
          carousel2.current.style.outline = "none";
        }

        carousel2.current.style.color = "black";

        carousel1.current.style.outline = "none";
        carousel3.current.style.outline = "none";
        carousel1.current.style.color = "var(--progress-bar)";
        carousel3.current.style.color = "var(--progress-bar)";
      });

      carousel3.current.addEventListener("click", () => {
        width1 = 100;
        width2 = 100;
        width3 = 1;
        progressBar1Ref.current.style.width = "0";
        progressBar2Ref.current.style.width = "0";

        if (window.innerWidth >= 1024) {
          carousel3.current.style.outline = "0.125rem solid var(--outline-color)";
        } else {
          carousel3.current.style.outline = "none";
        }

        carousel3.current.style.color = "black";

        carousel1.current.style.outline = "none";
        carousel2.current.style.outline = "none";
        carousel1.current.style.color = "var(--progress-bar)";
        carousel2.current.style.color = "var(--progress-bar)";
      });
    }
  });
  return (
    <section className="bg-[#f9fafb] pt-[12.5rem] pb-[7.8125rem]">
      <div className="wrapper">
        <div className="flex items-end justify-between mb-[6.25rem] max-md:flex-col max-md:items-start">
          <div className="flex-[0.8]">
            <h5 className="text-[#08445e] font-bold mb-[1.875rem] max-md:text-sm">
              BUILT IN MARKETING TOOLS
            </h5>
            <h2 className="text-[4rem] font-bold leading-tight max-xl:text-[3.5rem] max-lg:text-[2.5rem] max-md:text-[2rem] max-md:mb-[1.875rem]">
              From first touch to full funnel
            </h2>
          </div>

          <div>
            <ButtonCTA text="Leverage our full marketing suite" />
          </div>
        </div>

        <div className="flex items-start gap-[3.125rem] max-lg:flex-col-reverse">
          <div className="flex-[0.5] flex flex-col gap-[3.75rem]">
            <div
              ref={carousel1}
              className="flex items-start gap-[1.5625rem] cursor-pointer text-gray-600"
            >
              <div className="w-[1.875rem] h-[1.875rem] rounded-full bg-[#efe9ff] text-[#753af4] flex items-center justify-center p-[1.25rem]">
                <TagIcon />
              </div>

              <div>
                <h3 className="text-[1.5rem] font-bold max-xl:text-[1.375rem] max-md:text-[1.25rem]">
                  Reach new leads
                </h3>
                <p className="mt-[1.875rem] mb-[3.125rem] max-xl:text-[0.875rem] max-md:text-sm">
                  Find new shoppers with the SEO, social media, and content
                  marketing tools that help you reach customers where they are.
                </p>

                <div className="w-full h-[0.125rem] bg-gray-300 relative">
                  <div
                    ref={progressBar1Ref}
                    className="absolute top-0 left-0 right-0 bottom-0 bg-black w-0"
                  ></div>
                </div>
              </div>
            </div>

            <div
              ref={carousel2}
              className="flex items-start gap-[1.5625rem] cursor-pointer text-gray-600"
            >
              <div className="w-[1.875rem] h-[1.875rem] rounded-full bg-[#e9f4ff] text-[#3a7af4] flex items-center justify-center p-[1.25rem]">
                <AlternateEmailIcon />
              </div>

              <div>
                <h3 className="text-[1.5rem] font-bold max-xl:text-[1.375rem] max-md:text-[1.25rem]">
                  Engage with customers
                </h3>
                <p className="mt-[1.875rem] mb-[3.125rem] max-xl:text-[0.875rem] max-md:text-sm">
                  Build custom email campaigns, set automations to serve every
                  segment, and connect with customers on the go with integrated
                  messaging tools.
                </p>

                <div className="w-full h-[0.125rem] bg-gray-300 relative">
                  <div
                    ref={progressBar2Ref}
                    className="absolute top-0 left-0 right-0 bottom-0 bg-black w-0"
                  ></div>
                </div>
              </div>
            </div>

            <div
              ref={carousel3}
              className="flex items-start gap-[1.5625rem] cursor-pointer text-gray-600"
            >
              <div className="w-[1.875rem] h-[1.875rem] rounded-full bg-[#ffe9e9] text-[#d73e3e] flex items-center justify-center p-[1.25rem]">
                <LeaderboardIcon />
              </div>

              <div className="relative">
                <h3 className="text-[1.5rem] font-bold max-xl:text-[1.375rem] max-md:text-[1.25rem]">
                  Data you can build on
                </h3>
                <p className="mt-[1.875rem] mb-[3.125rem] max-xl:text-[0.875rem] max-md:text-sm">
                  Take control of your customer data to build custom audiences
                  and explore the customer insights that drive ongoing growth.
                </p>

                <div className="w-full h-[0.125rem] bg-gray-300 relative">
                  <div
                    ref={progressBar3Ref}
                    className="absolute top-0 left-0 right-0 bottom-0 bg-black w-0"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={marketingToolImageRef}
            className="flex-[0.5] h-[37.5rem] duration-300 max-lg:w-full max-lg:py-[21.875rem]"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default MarketingTools;
