import { Button } from "@mui/material";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const Profile = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 bg-white flex flex-col items-start justify-start pt-[18px] px-6 pb-6 box-border gap-[24px] max-w-full z-[1] text-left text-xl text-gray-200 font-poppins mq1050:pt-5 mq1050:pb-5 mq1050:box-border ${className}`}
    >
      <div className="w-[377px] h-[844px] relative bg-white hidden max-w-full" />
      <div className="self-stretch rounded-lg bg-ghostwhite-200 flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px] z-[2] text-center">
        <div className="self-stretch h-[390px] relative rounded-lg bg-ghostwhite-200 hidden" />
        <div className="self-stretch h-52 relative">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-gainsboro w-[329px] h-[178px] z-[3]" />
          <div className="absolute top-[108px] left-[114px] w-[100px] h-[100px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-cornflowerblue w-full h-full z-[4]" />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
          <div className="flex-1 flex flex-col items-end justify-start gap-[40px] mq450:gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[69px] pl-[70px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <h2 className="m-0 relative text-inherit capitalize font-semibold font-inherit z-[3] mq450:text-base">
                  Ibnu Syahsudin
                </h2>
                <div className="flex flex-row items-start justify-start py-0 px-[26px] text-base text-gray-100">
                  <h3 className="m-0 relative text-inherit capitalize font-medium font-inherit inline-block min-w-[106px] z-[3]">
                    @ibnusyudin
                  </h3>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-left text-sm text-gray-100 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative capitalize font-medium inline-block min-w-[33px] z-[3]">
                  Item
                </div>
                <div className="relative text-lg capitalize font-medium text-gray-200 inline-block min-w-[33px] z-[3]">
                  235
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-[19px] pl-0 gap-[8px]">
                <div className="relative capitalize font-medium inline-block min-w-[66px] z-[3]">
                  Followers
                </div>
                <div className="relative text-lg capitalize font-medium text-gray-200 inline-block min-w-[57px] z-[3]">
                  2000K
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[85px]">
                <Button
                  className="self-stretch h-10 z-[3]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#26a4ff",
                    borderRadius: "8px",
                    "&:hover": { background: "#26a4ff" },
                    height: 40,
                  }}
                >
                  Edit profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-base">
          Upcoming Task
        </h2>
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <img
            className="w-6 h-6 relative overflow-hidden shrink-0 z-[2]"
            loading="lazy"
            alt=""
            src="/frame-2.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-base">
        <GroupComponent
          podcastMobileApps="Podcast Mobile Apps"
          uIDesigner="UI Designer"
        />
        <GroupComponent
          podcastMobileApps="UX Program"
          uIDesigner="Programmer"
          propDisplay="inline-block"
          propMinWidth="98px"
          propBackgroundColor="#fff0f4"
          propWidth="89px"
          propBackgroundColor1="#fff0f4"
          propColor="#df1650"
          propMinWidth1="65px"
        />
      </div>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
