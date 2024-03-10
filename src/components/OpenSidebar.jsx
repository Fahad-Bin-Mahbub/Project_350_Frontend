import React from "react";
import dashboardIcon from "../assets/icons/dashboard.svg";
import accountIcon from "../assets/icons/account.svg";
import settingsIcon from "../assets/icons/settings.svg";
import logoutIcon from "../assets/icons/logout.svg";
import logo from "../assets/icons/logo.png";
const OpenSidebar = () => {
  return (
    <div>
      {/* rounded-tl-[36px] rounded-bl-[36px] */}
      <ul className="menu bg-blue-950 w-60 min-h-screen rounded-r-[36px] text-white">
        {/* sust logo */}
        <div className="flex justify-center mx-auto">
          <a>
            <div className="avatar">
              <div className="w-20 h-20 rounded-full mt-8">
                <img src={logo} />
              </div>
            </div>
          </a>
        </div>
        {/* menu items */}
        <div className="flex flex-col gap-60 mt-12">
          {/* upper menu list */}
          <ul>
            <li className="bg-white rounded-lg mx-3 text-blue-950">
              <div className="flex gap-8 text-base font-bold">
                <img src={dashboardIcon} alt="Dashboard Icon" />
                Dashboard
              </div>
            </li>
            <li className="mt-4 rounded-lg mx-3">
              <div className="flex gap-8 text-base">
                <img src={accountIcon} />
                Account
              </div>
            </li>
          </ul>

          {/* lower menu list */}
          <ul>
            <li className="mt-4 rounded-lg mx-3">
              <div className="flex gap-8 text-base">
                <img src={settingsIcon} />
                Settings
              </div>
            </li>
            <li className="mt-4 rounded-lg mx-3">
              <div className="flex gap-8 text-base">
                <img src={logoutIcon} />
                Logout
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default OpenSidebar;
