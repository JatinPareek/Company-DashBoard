import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[100px] bg-gray-900 flex flex-col items-start justify-start py-10 pl-[26px] pr-0 box-border gap-[64px] z-[1] mq750:pt-[26px] mq750:pb-[26px] mq750:box-border mq1125:hidden ${className}`}
    >
      <div className="w-[100px] h-[900px] relative bg-gray-900 hidden gap-4" />
      <Link to="/">
        <img
          className="w-12 h-12 relative z-[1]"
          loading="lazy"
          alt=""
          src="/group-48095870.svg"
        />
      </Link>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[244px] pl-[11px] pr-0 mq750:pb-[159px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px]">
          <NavLink to="/" className="relative group " activeClassName="active">
            {({ isActive }) => (
              <div className="relative group flex items-center ">
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Home"
                  src="/1.svg"
                />
              </div>
            )}
          </NavLink>
          <NavLink
            to="/analytics"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Analytics"
                  src="/39.svg"
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/wishlist"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Wishlist"
                  src="/38.svg"
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/chat"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Chat"
                  src="/8.svg"
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/profile"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Profile"
                  src="/61.svg"
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/settings"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Settings"
                  src="/4.svg"
                />
              </>
            )}
          </NavLink>
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
