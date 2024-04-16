import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { useAuth } from "../context/Auth";
const NavBar = () => {
  const baseUrl = "https://examtrack.up.railway.app";
  const [auth, setAuth] = useAuth();
  console.log("Auth is " +auth);
  console.log(localStorage.getItem("auth"));
  const handleLogout = async () => {
    localStorage.removeItem("token");
    setAuth({
      ...auth,
      user: null,
    });
    window.localStorage.removeItem("auth");
    window.location.href = `${baseUrl}/auth/logout`;
  };

  return (
    <div className="navbar bg-grey-100 w-full rounded-full flex justify-between ">
      <div className="font-bold text-[30px] text-black pl-8">Dashboard</div>
      <div className="flex gap-7">
        <IoIosNotifications size={30} />
        <FaUser size={30} />
        <Menu
          as="div"
          className="outline-none relative inline-block text-center"
        >
          <div>
            <Menu.Button className="inline-flex items-center gap-2 w-full justify-center rounded-md text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <div className=" h-8 w-20 rounded-full flex items-center justify-center">
                <p className="text-black">{auth?.user?.firstName}</p>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 text-black">
                <Menu.Item as="button" onClick={() => console.log("Logout")}>
                  Profile
                </Menu.Item>
              </div>
              <div className="px-1 py-1 text-black">
                <Menu.Item as="button" onClick={handleLogout}>
                  Logout
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
