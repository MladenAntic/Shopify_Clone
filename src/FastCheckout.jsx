import React from "react";
import checkout from "./assets/checkout.jpg";
import ButtonCTA from "./components/ButtonCTA";

const FastCheckout = () => {
  return (
    <section className="pt-[6.25rem]">
      <div className="wrapper flex items-center justify-center gap-[9.375rem] max-xl:gap-[4.6875rem] max-lg:flex-col-reverse max-md:gap-[3.125rem]">
        <div>
          <img src={checkout} alt="Checkout" />
        </div>

        <div className="mt-[6.25rem] max-lg:mt-0">
          <h5 className="text-[#08445e] font-bold max-lg:text-sm">FAST, RELIABLE CHECKOUT</h5>
          <h3 className="my-[1.875rem] text-[2rem] font-bold leading-tight max-lg:text-[1.5rem] max-lg:my-[1.25rem] max-md:text-[1.25rem]">
            The best-converting checkout on the planet
          </h3>
          <p className="text-sm mb-[3.125rem] max-lg:mb-[1.875rem]">
            Back your business with Shop Pay—the one-click checkout that's built
            to convert.
          </p>
          <ButtonCTA text="Seize every sale" />
        </div>
      </div>
    </section>
  );
};

export default FastCheckout;
