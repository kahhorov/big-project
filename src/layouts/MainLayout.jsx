import { Outlet } from "react-router-dom";
import { LeftBar } from "../components";
import { useState } from "react";
// icons
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
// components function
function MainLayout() {
  const [isOpenLeftBar, setIsOpenLeftBar] = useState(false);
  return (
    <div className="flex">
      <div className="bg-left-bar  w-1/1 sm:w-1/3 h-screen py-2 overflow-y-auto scrollbar-telegram">
        <nav className="shadow-lg px-3 py-2">
          <button
            className="relative w-8 h-8 flex justify-center items-center"
            onClick={() => setIsOpenLeftBar(!isOpenLeftBar)}
          >
            <IoIosMenu
              className={`absolute text-2xl transition-all duration-300 ease-in-out
              ${
                isOpenLeftBar
                  ? "opacity-0 rotate-90 scale-50"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <IoIosClose
              className={`absolute text-3xl transition-all duration-300 ease-in-out
      ${
        isOpenLeftBar
          ? "opacity-100 rotate-0 scale-100"
          : "opacity-0 -rotate-90 scale-50"
      }`}
            />
          </button>
        </nav>

        {isOpenLeftBar && (
          <div
            onClick={() => setIsOpenLeftBar(false)}
            className="bg-[#0005] w-full h-screen absolute top-0 left-0 z-10"
          ></div>
        )}
        <LeftBar isOpenLeftBar={isOpenLeftBar} />
      </div>
      <main className="w-2/6 sm:w-2/3 h-screen bg-blue-500">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
