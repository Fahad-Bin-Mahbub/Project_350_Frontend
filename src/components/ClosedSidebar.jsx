import React from "react";
import dashboardIcon from "../assets/icons/dashboard.svg";
import accountIcon from "../assets/icons/account.svg";
import settingsIcon from "../assets/icons/settings.svg";
import logoutIcon from "../assets/icons/logout.svg";
const ClosedSidebar = ({ toggleSidebar }) => {
  return (
    <div>
      <ul className="menu bg-blue-950 w-20 min-h-screen text-white">
        {/* menu items */}
        <div className="flex flex-col gap-60 mt-12">
          {/* upper menu list */}
          <ul>
            <li
              className=" bg-white rounded-lg mx-3 text-blue-950 cursor-pointer"
              onClick={toggleSidebar}
            >
              <div className="flex gap-8 text-base font-bold">
                <img src={dashboardIcon} />
              </div>
            </li>
            <li
              className="mt-4 rounded-lg mx-3 cursor-pointer"
              onClick={toggleSidebar}
            >
              <div className="flex gap-8 text-base">
                <img src={accountIcon} />
              </div>
            </li>
          </ul>

          {/* lower menu list */}
          <ul>
            <li
              className="mt-4 rounded-lg mx-3 cursor-pointer"
              onClick={toggleSidebar}
            >
              <div className="flex gap-8 text-base">
                <img src={settingsIcon} />
              </div>
            </li>
            <li
              className="mt-4 rounded-lg mx-3 cursor-pointer"
              onClick={toggleSidebar}
            >
              <div className="flex gap-8 text-base">
                <img src={logoutIcon} />
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default ClosedSidebar;
