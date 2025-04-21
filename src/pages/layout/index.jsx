import React, { useState } from "react";
import Logo from "@assets/logo-blue.png";
import { layoutNav } from "../../utils";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  LogIn,
  LogOut,
  Search,
  Settings,
  User,
} from "lucide-react";

const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl overflow-hidden shadow-lg z-50">
      <ul className="py-1">
        <li>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <User className="w-4 h-4" /> My Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings className="w-4 h-4" /> Settings
          </a>
        </li>
        <li>
          <button
            onClick={() => alert("Logging out...")}
            className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-red-600 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4" /> Log out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <div className="flex gap-[30px] p-5 bg-[#f3f8fc]">
      <aside className="w-[200px] h-[calc(100vh-40px)] flex flex-col justify-between rounded-3xl bg-white text-black py-10 pl-4">
        <div>
          <NavLink to={"/"}>
            <img src={Logo} alt="Logo" />
          </NavLink>
          <nav className="space-y-2.5 pt-10">
            {layoutNav.map((item) => {
              let Icon = item.icon;
              const isActive =
                location.pathname === item.path ||
                (location.pathname.startsWith(item.path) &&
                  location.pathname.split("/")[1] === item.path.split("/")[1]);

              return (
                <NavLink
                  to={item.path}
                  key={item.id}
                  className={`flex items-stretch justify-between gap-2 ${
                    isActive ? "bg-white" : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 text-base font-semibold w-full py-2.5 px-2 rounded-[10px] ${
                      isActive
                        ? "text-[#3F8CFF] bg-[#ecf3ff]"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <Icon />
                    <span>{item.name}</span>
                  </div>
                  {isActive && (
                    <div className="w-1 bg-[#3F8CFF] rounded-lg"></div>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>
        <div className="pr-3">
          <button className="text-base font-semibold text-[#7D8592] flex items-center gap-4 cursor-pointer w-full hover:bg-gray-100 px-2 py-2.5 rounded-[10px]">
            <LogIn />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col gap-[30px] h-screen">
        <header className="flex items-center justify-between">
          <div className="relative group">
            <input
              className="bg-white outline-none h-[48px] placeholder:text-[#7D8592] rounded-[14px] py-[13px] w-[400px] pl-[54px] pr-3"
              type="text"
              placeholder="Search"
            />
            <Search className="absolute top-1/2 -translate-y-1/2 left-5 cursor-pointer" />
          </div>
          <div className="flex items-center gap-6">
            <button className="w-12 h-12 flex items-center justify-center bg-white rounded-[14px] cursor-pointer">
              <Bell color="#0A1629" />
            </button>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center bg-white gap-3 h-12 rounded-[14px] px-3 text-base font-bold text-color cursor-pointer"
              >
                <img
                  src="https://i.pravatar.cc/40"
                  alt="Avatar"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <span>John Doe</span>
                <ChevronDown className="pl-0" size={24} />
              </button>

              {open && <ProfileDropdown />}
            </div>
          </div>
        </header>
        <main className="pt-[30px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
