import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[100px] bg-gray-300 flex flex-col items-end justify-start py-10 pr-[26px] pl-0 box-border gap-[64px] z-[1] mq750:pt-[26px] mq750:pb-[26px] mq750:box-border mq1125:hidden ${className}`}
    >
      <div className="w-[100px] h-[900px] relative bg-gray-300 hidden" />
      <Link to="/">
        <img
          className="w-12 h-12 relative z-[1]"
          loading="lazy"
          alt=""
          src="/group-48095870.svg"
        />
      </Link>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[244px] pr-[11px] pl-0 mq750:pb-[159px] mq750:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[40px]">
          <Link
            to="/"
            className="self-stretch flex flex-row items-start justify-between gap-[20px]"
          >
            <div className="h-8 w-1 relative rounded-lg bg-cornflowerblue z-[1]" />
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt="Home"
                src="/1.svg"
              />
            </div>
          </Link>
          <Link to="/analytics">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt="Analytics"
              src="/39.svg"
            />
          </Link>
          <Link to="/wishlist">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt="Wishlist"
              src="/38.svg"
            />
          </Link>
          <Link to="/chat">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt="Chat"
              src="/8.svg"
            />
          </Link>
          <Link to="/profile">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt="Profile"
              src="/61.svg"
            />
          </Link>
          <Link to="/settings">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt="Settings"
              src="/4.svg"
            />
          </Link>
        </div>
      </div>
      <img
        className="w-12 h-12 relative z-[1]"
        loading="lazy"
        alt=""
        src="/group-9984.svg"
      />
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
