import React from "react";
import saleImg from "./assets/point-of-sale.webp";
import ButtonCTA from "./components/ButtonCTA";

const PointOfSale = () => {
  return (
    <section className="pt-[12.5rem] pb-[9.375rem] max-lg:pt-[6.25rem]">
      <div className="wrapper flex items-center justify-center gap-[9.375rem] max-xl:gap-[4.6875rem] max-lg:flex-col max-md:gap-[3.125rem]">
        <div className="flex-1 mt-[6.25rem] max-lg:mt-0">
          <h5 className="text-[#08445e] font-bold max-lg:text-sm">
            POINT OF SALE
          </h5>
          <h3 className="my-[1.875rem] text-[2rem] font-bold leading-tight max-lg:text-[1.5rem] max-lg:my-[1.25rem] max-md:text-[1.25rem]">
            Flexible point of sale to power your retail store
          </h3>
          <p className="text-sm mb-[3.125rem] max-lg:mb-[1.875rem]">
            A POS system that allows customers to shop their way, from online to
            checkout line.
          </p>
          <ButtonCTA text="Meet Shopify POS" />
        </div>

        <div>
          <img src={saleImg} alt="Point Of Sale Image" />
        </div>
      </div>
    </section>
  );
};

export default PointOfSale;
