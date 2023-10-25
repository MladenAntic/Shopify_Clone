import React, { useEffect, useRef } from "react";

const GrowYourBusiness = () => {
    const growYourBusinessSectionRef = useRef(null)

    useEffect(() => {
        growYourBusinessSectionRef.current.style.background = 'linear-gradient(to right bottom, #5fd6b6, #4bfd86)'
    })

  return (
    <section ref={growYourBusinessSectionRef} className="py-[9.375rem] flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-[3rem] font-bold leading-tight max-lg:text-[2.5rem] max-md:text-[2rem]">Grow your <br /> business here</h3>
        <p className="text-xl my-[2.5rem] max-lg:text-base max-md:text-sm">
          Whether you want to sell products down the street or around the world,
          we <br className="max-md:hidden" /> have all the tools you need.
        </p>
        <a href="#" className="inline-block bg-black py-[1.25rem] px-[2.5rem] text-white font-bold rounded-full max-md:text-sm max-md:py-[0.9375rem] max-md:px-[1.875rem] hover:opacity-80">Start Free Trial</a>
      </div>
    </section>
  );
};

export default GrowYourBusiness;
