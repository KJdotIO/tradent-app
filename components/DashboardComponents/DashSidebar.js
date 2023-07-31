import React from "react";
import { useRouter } from 'next/router';
import logo from "../../public/Tradent-logo.png";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();
  
  const links = [
    { name: "Dashboard", path: "/Dashboard" },
    { name: "Trade Log", path: "/Dashboard/TradeLog" },

  ];

  return (
    <aside className="h-screen w-[240px] border-r-2 border-[#333333] text-white p-6 flex flex-col">
      <div className="flex">
        <div>
          {" "}
          <Image alt="Tradent" src={logo} className="w-[20px] mr-1" />
        </div>
        <span className="ml-2 text-2xl font-black tracking-wide text-gray-100 ">
          Tradent
        </span>
      </div>

      <div className="w-[100%] h-[2px] bg-white my-5"></div>

      <nav>
        {links.map((link, index) => (
          <div 
            key={index}
            className={` hover:bg-[#1f1f1f] hover:text-white p-3 rounded-[10px] ease-in-out mb-[10px] cursor-pointer ${router.pathname === link.path ? 'text-white' : 'text-[#393939]'}`}
            onClick={() => router.push(link.path)}
          >
            {link.name}
          </div>
        ))}
        
      </nav>
    </aside>
  );
};

export default Sidebar;
