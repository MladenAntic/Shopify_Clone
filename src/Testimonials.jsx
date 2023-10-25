import React, { useRef, useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import testimonial1 from "./assets/testimonial1.webp";
import testimonial2 from "./assets/testimonial2.webp";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState(
    "We went from burning beans in our garage to needing a 10,000 sq. ft facility to meet customer demand."
  );
  const [company, setCompany] = useState("BLK & Bold");
  const [owner, setOwner] = useState("Rod Johnson");

  const testimonial1Ref = useRef(null);
  const testimonial2Ref = useRef(null);

  const [index, setIndex] = useState(1);

  function leftArrow() {
    setIndex(index - 1);

    if (index <= 1) {
      setIndex(2);
    }
  }

  function rightArrow() {
    setIndex(index + 1);

    if (index >= 2) {
      setIndex(1);
    }
  }

  function changeTestimonial() {
    switch (index) {
      case 1:
        setTestimonial(
          "We went from burning beans in our garage to needing a 10,000 sq. ft facility to meet customer demand."
        );
        setCompany("BLK & Bold");
        setOwner("Rod Johnson");
        testimonial1Ref.current.style.zIndex = "1";
        testimonial1Ref.current.style.transform = "rotate(0deg)";
        testimonial1Ref.current.style.transform = "scale(1)";
        testimonial2Ref.current.style.zIndex = "-1";
        testimonial2Ref.current.style.opacity = "0.5";
        testimonial2Ref.current.style.transform = "rotate(12deg)";
        testimonial2Ref.current.style.top = "1.5625rem";
        break;
      case 2:
        setTestimonial(
          "Shopify helped me take something that I put my heart and soul into and share it with people that need it and find it useful."
        );
        setCompany("Satya");
        setOwner("Patrice Mousseau");
        testimonial1Ref.current.style.zIndex = "-1";
        testimonial1Ref.current.style.transform = "rotate(-12deg)";
        testimonial1Ref.current.style.transform = "scale(0.8)";
        testimonial2Ref.current.style.zIndex = "1";
        testimonial2Ref.current.style.opacity = "1";
        testimonial2Ref.current.style.transform = "rotate(0deg)";
        testimonial2Ref.current.style.top = "0";
        break;
    }
  }

  useEffect(() => {
    changeTestimonial();
  }, [index]);

  return (
    <section className="pt-[18.75rem] pb-[9.375rem] max-md:pt-[9.375rem]">
      <div className="wrapper flex items-center justify-between max-md:flex-col-reverse">
        <div className="flex-[0.5]">
          <q className="text-[2.5rem] font-bold leading-snug max-xl:text-[2rem] max-lg:text-[1.5rem]">
            {testimonial}
          </q>

          <div className="my-[3.125rem]">
            <h4 className="font-bold text-[2rem] mb-[0.625rem] max-lg:text-[1.25rem]">
              {company}
            </h4>
            <small className="text-base max-md:text-sm">
              <strong>{owner}</strong> — Owner
            </small>
          </div>

          <div className="flex items-center gap-[0.9375rem]">
            <button
              onClick={leftArrow}
              className="w-[3.125rem] h-[3.125rem] border-2 border-black rounded-full"
            >
              <ArrowBackIcon />
            </button>
            <button
              onClick={rightArrow}
              className="w-[3.125rem] h-[3.125rem] border-2 border-black rounded-full"
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>

        <div className="relative h-[31.25rem] flex-[0.35] max-xl:h-[28.125rem] max-lg:h-[21.875rem] max-md:w-[90%] max-md:py-[12.5rem] max-md:mb-[6.25rem]">
          <img
            ref={testimonial1Ref}
            src={testimonial1}
            alt="Testimonial 1"
            className="absolute w-full h-full rounded-lg duration-1000 top-0"
          />
          <img
            ref={testimonial2Ref}
            src={testimonial2}
            alt="Testimonial 2"
            className="absolute w-full h-full rounded-lg z-[-1] rotate-12 top-[1.5625rem] opacity-5 duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
