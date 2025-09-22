import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "../ui/Button";
import { MenuIcon, MoonIcon, XIcon } from "../../../public/Images";
import SunIcon from "../../../public/Images/SunIcon";
import { Themes } from "../types/Theme";
import AppLogo from "../ui/AppLogo";

const ResponsiveSideBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden text-gray-600 hover:text-black"
        onClick={() => setSidebarOpen(true)}
      >
        <MenuIcon />
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <AppLogo />
          <button onClick={() => setSidebarOpen(false)}>
            <XIcon />
          </button>
        </div>

        <ul className="flex flex-col mt-6 gap-6 px-6 text-gray-600">
          <li
            className="cursor-pointer text-[#646E7D] hover:text-black"
            onClick={() => setSidebarOpen(false)}
          >
            Featured Jobs
          </li>
          <li
            className="cursor-pointer text-[#646E7D] hover:text-black"
            onClick={() => setSidebarOpen(false)}
          >
            Salary Trend
          </li>
          <li
            className="cursor-pointer text-[#646E7D] hover:text-black"
            onClick={() => setSidebarOpen(false)}
          >
            Where To Fly
          </li>
          <li
            className="cursor-pointer text-[#646E7D] hover:text-black"
            onClick={() => setSidebarOpen(false)}
          >
            Covid Policy
          </li>
          <li
            className="cursor-pointer text-[#646E7D] hover:text-black"
            onClick={() => setSidebarOpen(false)}
          >
            Blog
          </li>
          <li
            className="cursor-pointer text-[#646E7D] hover:text-black"
            onClick={() => setSidebarOpen(false)}
          >
            Help
          </li>
          <li
            className="cursor-pointer text-[#646E7D] hover:text-black"
            onClick={() => setSidebarOpen(false)}
          >
            <Button
              variant="primaryOutline"
              className="border-none ml-[px] pl-[0px]"
              onClick={toggleTheme}
            >
              {theme === Themes.LIGHT ? (
                <MoonIcon width={22} height={22} />
              ) : (
                <SunIcon width={22} height={22} />
              )}
            </Button>
          </li>

          <div className="mt-6 flex flex-col gap-4 ">
            <Button variant="primaryPale" className="w-full">
              Login
            </Button>
          </div>
        </ul>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};
export default ResponsiveSideBar;
