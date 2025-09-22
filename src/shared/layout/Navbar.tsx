import React from "react";
import { Button } from "../ui/Button";
import { MoonIcon } from "../../../public/Images";
import { useTheme } from "../context/ThemeContext";
import { Themes } from "../types/Theme";
import SunIcon from "../../../public/Images/SunIcon";
import ResponsiveSideBar from "./ResponsiveSideBar";
import AppLogo from "../ui/AppLogo";

const Navbar: React.FC = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <nav className="w-[100%] max-w-[1380px] h-[66px] mx-auto flex items-center justify-between px-8 pt-8 py-4">
      <div className="flex items-center">
        <AppLogo />
      </div>

      <ul className="hidden lg:flex items-center gap-10 text-gray-600 w-[55%] min-w-[570px]">
        <li className="cursor-pointer text-[#646E7D] hover:text-black">Featured Jobs</li>
        <li className="cursor-pointer text-[#646E7D] hover:text-black">Salary Trend</li>
        <li className="cursor-pointer text-[#646E7D] hover:text-black">Where To Fly</li>
        <li className="cursor-pointer text-[#646E7D] hover:text-black">Covid Policy</li>
        <li className="cursor-pointer text-[#646E7D] hover:text-black">Blog</li>
      </ul>

      <div className="hidden lg:flex items-center gap-6">
        <Button variant="primaryOutline" className="border-none" onClick={toggleTheme}>
          {theme === Themes.LIGHT ? <MoonIcon width={22} height={22} />
           : <SunIcon width={22} height={22} />}
        </Button>
        <span className="cursor-pointer text-gray-600 hover:text-black">
          Help
        </span>
        <Button variant="primaryPale" size="lg" className="px-[40px] h-[66px]">
          Login
        </Button>
      </div> 
      <ResponsiveSideBar />     
    </nav>
  );
};

export default Navbar;
