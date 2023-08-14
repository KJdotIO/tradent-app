import React from "react";
import logo from "../../public/Tradent-logo.png";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, UserIcon, CogIcon } from "@heroicons/react/outline"; 
import { Button } from "@tremor/react";
import {navItems, userItems} from '../../pages/Dashboard/dashboardData'



const DashboardHeader = ({ toggleSidebar }) => {
  return (
    <>
      <div
        className="
      bg-[#131313] 
      z-40 
      top-0 
      w-full 
      border-b-[0.5px] 
      border-white
      py-4
      px-[60px]
      flex
      items-center
      justify-between
      "
      >
        <div className=" items-center gap-[30px] hidden md:flex">
        <Link href='/' className="cursor-pointer">
          <Image src={logo} alt="Tradent Logo" width={35} />
        </Link>
          {/* divider */}
          <div className="w-[1px] bg-white h-[50px]"></div>

          {/* nav items for desktop */}
          <nav className="flex">
            <ul className="flex gap-[20px]">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
          {/* Hamburger menu for small screens */}
          <button className="md:hidden" onClick={toggleSidebar}>
            <MenuIcon className="h-8 w-8 text-gray-500" />
          </button>
          {/* User icon and dropdown*/}
          <div className="dropdown dropdown-end rounded-full border-[2px] border-white p-2  transition ease-in-out">
            <label tabIndex={0}>
             <UserIcon className="h-8 w-8 text-gray-500 cursor-pointer" />
            </label>
            <ul tabIndex={0} className=" transition ease-in-out dropdown-content border-white border-[1px] bg-[#131313] mt-[20px] z-[1] menu p-4 shadow rounded-[10px] w-52 ">
                { userItems.map((item, index) => (
                    <Link key={index} className="transition ease-in-out p-4 hover:bg-[#191919] hover:rounded-[10px]" href={item.link}>{item.title}</Link>
                ))}
                    <Link href='' className="self-end mt-10">
                        <CogIcon className="h-8 w-8 text-gray-500" />
                    </Link>
            <Button className="transition ease-in-out">Sign out</Button>
            </ul>

          </div>
      </div>
    </>
  );
};

export default DashboardHeader;
export { navItems };
