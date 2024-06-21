import PropTypes from "prop-types";
import { useState } from "react";

const FrameComponent = ({ className = "" }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className={`self-stretch bg-white box-border flex flex-row items-start justify-start pt-6 px-8 pb-[22px] gap-[54px] max-w-full text-left text-xs text-gray-400 font-poppins border-b-[1px] border-solid border-gray-500 mq450:gap-[27px] mq750:flex-wrap ${className}`}
    >
      <div className="h-24 w-[915px] relative bg-white box-border hidden max-w-full border-b-[1px] border-solid border-gray-500" />
      <div className="flex-1 rounded-lg bg-ghostwhite-200 flex flex-row items-start justify-start py-[15px] px-4 box-border gap-[16px] min-w-[94px] max-w-full z-[1]">
        <div className="h-12 w-[559px] relative rounded-lg bg-ghostwhite-200 hidden max-w-full" />
        <div className="flex flex-col items-center justify-center pt-px px-0 pb-0">
          <img
            className="w-6 h-6 relative rounded-2xl overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/7.svg"
          />
        </div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search here.."
          className="flex-1 rounded-lg bg-ghostwhite-200 py-[10px] px-4 box-border text-gray-400 inline-block min-w-[78px]"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[15.5px] text-sm text-gray-200">
        <img
          className="h-12 w-12 relative min-h-[48px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-48096659.svg"
        />
        <div className="h-12 w-12 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-cornflowerblue w-full h-full z-[1]" />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full"
            loading="lazy"
            alt=""
          />
          <div className="absolute top-[4px] left-[37px] rounded-[50%] bg-mediumvioletred box-border w-2.5 h-2.5 z-[3] border-[0px] border-solid border-white" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <a className="[text-decoration:none] relative capitalize font-semibold text-[inherit] inline-block min-w-[111px] z-[1]">
            Ibnu syahsudin
          </a>
          <a className="[text-decoration:none] relative text-xs text-gray-100 inline-block min-w-[60px] z-[1]">
            Company
          </a>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
