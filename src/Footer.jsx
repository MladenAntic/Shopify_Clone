import React from "react";
import footerLogo from "./assets/footer-logo.svg";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <footer className="h-[31.25rem] bg-white py-[4.6875rem]">
      <div className="wrapper">
        <div className="flex items-start justify-between gap-[3.125rem] max-xl:gap-[1.5625rem] max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[3.125rem]">
          <img src={footerLogo} alt="Footer Logo" className="w-[7.8125rem]" />

          <ul className="flex flex-col gap-[0.9375rem] w-[15.625rem] max-md:items-center max-md:justify-center">
            <li className="mb-[0.9375rem] font-bold">Shopify</li>

            <li className="hover:underline max-xl:text-sm">
              <a href="#">About</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Careers</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Investors</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Press and Media</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Partners</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Affiliates</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Legal</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Service Status</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-[0.9375rem] w-[15.625rem] max-md:items-center max-md:justify-center">
            <li className="mb-[0.9375rem] font-bold">Support</li>

            <li className="hover:underline max-xl:text-sm">
              <a href="#">Merchant Support</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Help Center</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Hire a Partner</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Shopify Community</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Shopify Events</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-[0.9375rem] w-[15.625rem] max-md:items-center max-md:justify-center">
            <li className="mb-[0.9375rem] font-bold">Developers</li>

            <li className="hover:underline max-xl:text-sm">
              <a href="#">Shopify.dev</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">API documentation</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Dev Degree</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-[0.9375rem] w-[15.625rem] max-md:items-center max-md:justify-center">
            <li className="mb-[0.9375rem] font-bold">Products</li>

            <li className="hover:underline max-xl:text-sm">
              <a href="#">Shop</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Shop Pay</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Shopify Plus</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Shopify Fulfillment Network</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Linkpop</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Commerce Components</a>
            </li>
          </ul>
        </div>

        <div className="flex items-start ml-[10.9375rem] gap-[1.5625rem] mb-[6.25rem] max-xl:ml-[9.375rem] max-md:flex-col max-md:items-center max-md:justify-center max-md:ml-0">
          <ul className="flex flex-col gap-[0.9375rem] w-[15.625rem] mt-[6.25rem] max-md:text-center max-md:mt-[3.125rem]">
            <li className="mb-[0.9375rem] font-bold">Global Impact</li>

            <li className="hover:underline max-xl:text-sm">
              <a href="#">Sustainability</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Social impact</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Build Black</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Build Native</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Research</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-[0.9375rem] w-[15.625rem] mt-[6.25rem] max-md:text-center max-md:mt-[3.125rem]">
            <li className="mb-[0.9375rem] font-bold">Solutions</li>

            <li className="hover:underline max-xl:text-sm">
              <a href="#">Online store builder</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Website builder</a>
            </li>
            <li className="hover:underline max-xl:text-sm">
              <a href="#">Ecommerce website</a>
            </li>
          </ul>
        </div>

        <hr className="pb-[3.125rem] border-gray" />

        <div className="flex items-center justify-between pb-[3.125rem] max-md:flex-col max-md:gap-[1.875rem]">
          <ul className="flex items-center gap-[3.125rem] max-lg:gap-[1.5625rem]">
            <li>
              <a href="#" className="flex items-center">
                <LanguageIcon />
                USA
                <ArrowDropDownIcon />
              </a>
            </li>
            <li className="hover:underline max-xl:text-sm max-md:text-[0.75rem]">
              <a href="#">Terms of Service</a>
            </li>
            <li className="hover:underline max-xl:text-sm max-md:text-[0.75rem]">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="hover:underline max-xl:text-sm max-md:text-[0.75rem]">
              <a href="#">Sitemap</a>
            </li>
          </ul>

          <div className="flex items-center gap-[1.25rem] max-lg:gap-[0.625rem]">
            <a href="#" className="w-[2.5rem] h-[2.5rem] bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 max-lg:w-[1.875rem] max-lg:h-[1.875rem]">
              <FacebookIcon />
            </a>
            <a href="#" className="w-[2.5rem] h-[2.5rem] bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 max-lg:w-[1.875rem] max-lg:h-[1.875rem]">
              <YouTubeIcon />
            </a>
            <a href="#" className="w-[2.5rem] h-[2.5rem] bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 max-lg:w-[1.875rem] max-lg:h-[1.875rem]">
              <InstagramIcon />
            </a>
            <a href="#" className="w-[2.5rem] h-[2.5rem] bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 max-lg:w-[1.875rem] max-lg:h-[1.875rem]">
              <LinkedInIcon />
            </a>
            <a href="#" className="w-[2.5rem] h-[2.5rem] bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 max-lg:w-[1.875rem] max-lg:h-[1.875rem]">
              <PinterestIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
