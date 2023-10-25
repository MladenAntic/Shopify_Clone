import React from "react";
import BookIcon from "@mui/icons-material/Book";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import GroupsIcon from "@mui/icons-material/Groups";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SupportCard from "./components/SupportCard";

const Support = () => {
  return (
    <section className="bg-black text-white pt-[17.1875rem] pb-[6.25rem]">
      <h5 className="text-[#63ddb9] font-bold text-center mb-[1.25rem]">
        SHOPIFY SUPPORT
      </h5>
      <h2 className="text-[4rem] text-center font-bold leading-tight mb-[7.8125rem] max-lg:text-[3.5rem] max-md:text-[2rem]">
        The help you need, <br /> when you need it
      </h2>

      <div className="w-[70.3125rem] mx-auto flex gap-[1.5625rem] items-center flex-wrap max-xl:w-[80%]">
        <SupportCard
          icon={<BookIcon />}
          title="Blog"
          description="Get all the marketing and business strategy tips you need to help you
        run an online business."
          linkText="Read"
        />
        <SupportCard
          icon={<ImportContactsIcon />}
          title="Online Courses"
          description="Learn tried-and-tested business tips with instant access to lessons
          from successful entrepreneurs."
          linkText="Learn"
        />
        <SupportCard
          icon={<GroupsIcon />}
          title="Community"
          description="Connect with a community of brands, partners, and fellow merchants
          who understand Shopify."
          linkText="Discusss"
        />
        <SupportCard
          icon={<HelpOutlineIcon />}
          title="Help Center"
          description="Find answers with a dedicated helpdesk resource full of articles and
          videos from our Support team."
          linkText="Get Help"
        />
      </div>
    </section>
  );
};

export default Support;
