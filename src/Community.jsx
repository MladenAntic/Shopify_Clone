import React, { useEffect } from "react";
import enterprise from "./assets/enterprise.svg";
import plus from "./assets/plus.svg";
import partners from "./assets/partners.svg";
import developers from "./assets/developers.svg";
import retailStores from "./assets/retail-stores.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "animate.css";

const Community = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const arrows = document.querySelectorAll(".arrow");

    cards.forEach((card) => {
      card.style.boxShadow = "0rem 0rem 0.625rem 0rem rgba(200,200,200,1)";
      card.style.webkitBoxShadow = "0rem 0rem 0.625rem 0rem rgba(200,200,200,1)";
      card.style.mozBoxShadow = "0rem 0rem 0.625rem 0rem rgba(200,200,200,1)";
    });

    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("mouseover", () => {
        arrows[i].style.display = "inline-block";
      });
      cards[i].addEventListener("mouseout", () => {
        arrows[i].style.display = "none";
      });
    }
  });

  return (
    <section className="mt-[3.125rem] pb-[9.375rem]">
      <div className="wrapper">
        <h4 className="text-[#0a455f] font-semibold mb-[1.875rem] max-md:text-sm">
          EXPLORE THE WORLD'S LARGEST COMMERCE COMMUNITY
        </h4>

        <div className="flex items-center justify-between gap-[0.9375rem] rounded-lg max-lg:flex-col max-lg:justify-center">
          <a
            href="#"
            className="card bg-white rounded-lg p-[1.25rem] flex-[0.2] h-[15rem] max-xl:py-[0.625rem] max-lg:w-full"
          >
            <img
              src={enterprise}
              alt="Enterprise"
              className="block mb-[1.875rem]"
            />

            <h5 className="mb-[0.9375rem] font-bold text-lg max-xl:text-base">
              Enterprise
              <div className="animate__animated animate__fadeInLeft duration-75 arrow hidden ml-[0.3125rem]">
                <ArrowForwardIcon />
              </div>
            </h5>
            <p className="text-gray-700 max-xl:text-sm">
              The modern, composable stack for enterprise retail
            </p>
          </a>

          <a
            href="#"
            className="card bg-white rounded-lg p-[1.25rem] flex-[0.2] h-[15rem] max-xl:py-[0.625rem] max-lg:w-full"
          >
            <img src={plus} alt="Plus" className="block mb-[1.875rem]" />

            <h5 className="mb-[0.9375rem] font-bold text-lg max-xl:text-base">
              Plus
              <div className="animate__animated animate__fadeInLeft duration-75 arrow hidden ml-[0.3125rem]">
                <ArrowForwardIcon />
              </div>
            </h5>
            <p className="text-gray-700 max-xl:text-sm">
              A commerce solution for growing digital brands
            </p>
          </a>

          <a
            href="#"
            className="card bg-white rounded-lg p-[1.25rem] flex-[0.2] h-[15rem] max-xl:py-[0.625rem] max-lg:w-full"
          >
            <img src={partners} alt="Partners" className="block mb-[1.875rem]" />

            <h5 className="mb-[0.9375rem] font-bold text-lg max-xl:text-base">
              Partners
              <div className="animate__animated animate__fadeInLeft duration-75 arrow hidden ml-[0.3125rem]">
                <ArrowForwardIcon />
              </div>
            </h5>
            <p className="text-gray-700 max-xl:text-sm">
              Offer your expertise to Shopify merchants all over the world
            </p>
          </a>

          <a
            href="#"
            className="card bg-white rounded-lg p-[1.25rem] flex-[0.2] h-[15rem] max-xl:py-[0.625rem] max-lg:w-full"
          >
            <img
              src={developers}
              alt="Developers"
              className="block mb-[1.875rem]"
            />

            <h5 className="mb-[0.9375rem] font-bold text-lg max-xl:text-base">
              Developers
              <div className="animate__animated animate__fadeInLeft duration-75 arrow hidden ml-[0.3125rem]">
                <ArrowForwardIcon />
              </div>
            </h5>
            <p className="text-gray-700 max-xl:text-sm">
              Build the future of commerce with Shopify's powerful API
            </p>
          </a>

          <a
            href="#"
            className="card bg-white rounded-lg p-[1.25rem] flex-[0.2] h-[15rem] max-xl:py-[0.625rem] max-lg:w-full"
          >
            <img
              src={retailStores}
              alt="Retail Stores"
              className="block mb-[1.875rem]"
            />

            <h5 className="mb-[0.9375rem] font-bold text-lg max-xl:text-base">
              Retail Stores
              <div className="animate__animated animate__fadeInLeft duration-75 arrow hidden ml-[0.3125rem]">
                <ArrowForwardIcon />
              </div>
            </h5>
            <p className="text-gray-700 max-xl:text-sm">
              The complete system for selling in person
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
