import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  podcastMobileApps,
  uIDesigner,
  propDisplay,
  propMinWidth,
  propBackgroundColor,
  propWidth,
  propBackgroundColor1,
  propColor,
  propMinWidth1,
}) => {
  const podcastMobileAppsStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const groupDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth,
      backgroundColor: propBackgroundColor1,
    };
  }, [propWidth, propBackgroundColor1]);

  const uIDesignerStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth1,
    };
  }, [propColor, propMinWidth1]);

  return (
    <div
      className={`self-stretch rounded-lg bg-white box-border flex flex-col items-start justify-start py-3.5 px-[15px] gap-[24px] max-w-full z-[2] text-left text-base text-gray-200 font-poppins border-[1px] border-solid border-gray-700 ${className}`}
    >
      <div className="w-[329px] h-[159px] relative rounded-lg bg-white box-border hidden max-w-full border-[1px] border-solid border-gray-700" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <h3
            className="m-0 relative text-inherit font-semibold font-inherit z-[1]"
            style={podcastMobileAppsStyle}
          >
            {podcastMobileApps}
          </h3>
          <img
            className="h-6 w-6 relative min-h-[24px] z-[1]"
            loading="lazy"
            alt=""
            src="/group-48096984.svg"
          />
        </div>
        <div className="w-[237px] relative text-xs leading-[20px] text-gray-100 inline-block z-[1]">
          It just need to redesign the UI wireframe from what you did before
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-3xs text-deepskyblue mq450:flex-wrap">
        <div
          className="rounded-lg bg-aliceblue flex flex-row items-start justify-start py-2 px-3 whitespace-nowrap z-[1]"
          style={groupDivStyle}
        >
          <div
            className="h-[31px] w-[81px] relative rounded-lg bg-aliceblue hidden"
            style={rectangleDivStyle}
          />
          <div
            className="relative font-medium inline-block min-w-[57px] z-[1]"
            style={uIDesignerStyle}
          >
            {uIDesigner}
          </div>
        </div>
        <img
          className="self-stretch w-20 relative max-h-full object-cover min-h-[32px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-48096866@2x.png"
        />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  podcastMobileApps: PropTypes.string,
  uIDesigner: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propWidth: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default GroupComponent;
