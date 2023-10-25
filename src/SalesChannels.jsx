import React from "react";
import sales1 from "./assets/sales-1.webp";
import sales2 from "./assets/sales-2.webp";
import sales3 from "./assets/sales-3.webp";
import ButtonCTA from "./components/ButtonCTA";

const SalesChannels = () => {
  return (
    <section className="pt-[15.625rem] max-md:pt-[10.9375rem]">
      <div className="wrapper">
        <div className="flex items-start justify-between mb-[7.8125rem] max-md:flex-col max-md:gap-[1.875rem]">
          <div className="flex-1 mt-[2.5rem] max-xl:flex-[0.5] max-xl:mt-0">
            <h5 className="text-[#08445e] font-bold mb-[1.25rem]">
              SALES CHANNELS
            </h5>
            <h2 className="text-[4.5rem] font-bold leading-tight max-xl:text-[4rem] max-lg:text-[3rem] max-md:text-[2rem]">
              Sell to every buyer, everywhere
            </h2>
          </div>

          <div className="flex-[0.5]">
            <p className="mb-[3.125rem] text-sm max-lg:mb-[1.875rem]">
              Sell online, in person, and around the world with the marketing
              tools, social integrations, and sales channels you need to get
              your products in front of customers.
            </p>
            <ButtonCTA text="Start Selling" />
          </div>
        </div>

        <div className="flex items-center gap-[1.5625rem] max-lg:flex-col max-lg:justify-center">
          <div className="h-[25rem]">
            <img src={sales1} alt="Sales 1" />
          </div>
          <div className="h-[25rem]">
            <img src={sales2} alt="Sales 2" />
          </div>
          <div className="h-[25rem]">
            <img src={sales3} alt="Sales 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesChannels;
