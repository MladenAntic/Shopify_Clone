import React, { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SupportCard = ({ icon, title, description, linkText }) => {
  useEffect(() => {
    const supportCards = document.querySelectorAll(".support-card");
    const icons = document.querySelectorAll(".icon");
    const supportLinks = document.querySelectorAll(".support-link");
    const chevrons = document.querySelectorAll(".chevron-right");

    for (let i = 0; i < supportCards.length; i++) {
      supportCards[i].addEventListener("mouseover", () => {
        supportLinks[i].style.background = "rgb(31, 41, 55)";
        chevrons[i].style.marginLeft = "10px";
      });
      supportCards[i].addEventListener("mouseout", () => {
        supportLinks[i].style.background = "rgb(17, 24, 39)";
        chevrons[i].style.marginLeft = "0px";
      });
    }

    icons[0].style.background =
      "linear-gradient(to bottom left, #84f663, #94e7d9)";
    icons[1].style.background =
      "linear-gradient(to bottom left, #626ee8, #63ecb1)";
    icons[2].style.background =
      "linear-gradient(to top right, #626ee8, #63ecb1)";
    icons[3].style.background =
      "linear-gradient(to top left, #626ee8, #63ecb1)";
  });

  return (
    <a
      href="#"
      className="support-card w-[550px] border border-gray-800 rounded-2xl p-[50px] max-xl:w-full"
    >
      <div className="icon w-[60px] h-[60px] rounded-lg text-black flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-[40px] font-bold my-[20px] max-lg:text-[32px] max-md:text-[24px]">
        {title}
      </h3>
      <p className="text-lg mb-[50px] max-lg:text-base max-md:text-sm">
        {description}
      </p>

      <button
        className="support-link bg-gray-900 border border-gray-500 rounded-full py-[5px] px-[15px]"
      >
        {linkText}
        <div className="chevron-right inline-block duration-300">
          <ChevronRightIcon />
        </div>
      </button>
    </a>
  );
};

export default SupportCard;
