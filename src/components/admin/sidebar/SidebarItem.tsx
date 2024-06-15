import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

type SubmenuItem = {
  id: number;
  title: string;
  path: string;
};

type Props = {
  icon: string;
  title: string;
  path?: string;
  submenus?: SubmenuItem[];
};

const SidebarItem: React.FC<Props> = ({ icon, title, path, submenus }) => {
  const [isSubmenuVisible, setSubmenuVisible] = useState(false);
  const location = useLocation();
  const handleSubmenuToggle = () => {
    setSubmenuVisible(!isSubmenuVisible);
  };
  const renderMenuItem = () => {
    if (path && submenus?.length === 0) {
      return (
        <NavLink
          to={path}
          className={({ isActive }) =>
            [
              isActive
                ? "flex cursor-pointer items-center gap-3 px-4 py-2 text-base bg-[#ECF4FC] text-[#0A77FF] md:text-[14px]"
                : "flex cursor-pointer items-center gap-3 px-4 py-2 text-base text-[#858C95] md:text-[14px]",
            ].join(" ")
          }
          end={true}
        >
          <div className="flex items-center gap-3">
            <img src={icon} alt={title} className="fill-[#0A77FF]" />
            <span>{title}</span>
          </div>
        </NavLink>
      );
    } else if (submenus && submenus.length > 0) {
      return (
        <div
          className={`flex cursor-pointer items-center gap-3 px-4 py-2 text-base text-white md:text-[14px] ${
            submenus?.some((submenu) =>
              location.pathname.includes(submenu.path)
            )
              ? "rounded-md bg-white bg-opacity-40"
              : ""
          }`}
          onClick={handleSubmenuToggle}
        >
          <div className="flex items-center gap-3">
            <img src={icon} alt={title} className="fill-[#0A77FF]" />
            <span>{title}</span>
          </div>
          <span className="ml-auto text-[11px]">
            <IoPlay
              className={`duration-380 transition-transform ease-in-out ${
                isSubmenuVisible ? "rotate-90 transform" : ""
              }`}
            />
          </span>
        </div>
      );
    } else {
      return (
        <div
          className={`flex cursor-pointer items-center gap-3 px-4 py-2 text-base text-white md:text-[14px]`}
        >
          <div className="flex items-center gap-3">
            <img src={icon} alt={title} className="fill-[#0A77FF]" />
            <span>{title}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative">
      {renderMenuItem()}
      {isSubmenuVisible && submenus && submenus.length > 0 && (
        <div className="relative  ml-[25px] flex flex-col border-l-[1px] border-white mb-4 p-0 text-base text-white md:text-[14px]">
          {submenus.map((submenu, index) =>
            submenu.path ? (
              <div key={index} className="border-b-[1px] border-white">
                <NavLink
                  key={submenu.id + index}
                  to={submenu.path}
                  className={`${
                    location.pathname.includes(submenu.path)
                      ? "text-white"
                      : "text-gray-500"
                  } ml-[18px] block translate-y-2/4 bg-[#002060] px-2 py-1`}
                >
                  {submenu.title}
                </NavLink>
              </div>
            ) : (
              <div
                key={index}
                className="subNav cursor-pointer p-2 text-gray-500"
              >
                {submenu.title}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
