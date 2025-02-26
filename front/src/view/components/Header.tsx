import Logo from "../../../public/logo.svg";
import { Outlet, useNavigate } from "react-router";
import {  useState } from "react";
import { HamburguerMenu } from "./icons/HamburguerMenu";
import { liOptions } from "../../app/config/constants";
import { cn } from "../../app/utils/cn";
import { usePortifolioController } from "../pages/Portifolio/usePortifolioController";
import { useWindowWidth } from "../../app/hooks/useWindowWidth";
import { Close } from "./icons/Close";
import { motion, AnimatePresence } from "framer-motion";
import { localStorageKeys } from "../../app/config/localStorageKeys";

export function Header() {
  const storedPage = localStorage.getItem(localStorageKeys.pageActive);
  const [actveMenu, setActiveMenu] = useState(storedPage ?? "Início");
  const { handleOpenMenu, menuOpen } = usePortifolioController();
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();

 

  return (
    <div className="flex flex-col w-full h-screen z-10   ">
      <nav className=" bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  ">
          <div>
            <img src={Logo} alt="" className="w-30 h-30" />
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleOpenMenu}
            className="cursor-pointer md:hidden flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none mr-4"
          >
            {menuOpen ? (
              <Close className="text-white w-7 h-7" />
            ) : (
              <HamburguerMenu className="text-white w-7 h-7 md:hidden " />
            )}
          </button>
          {windowWidth >= 768 && (
            <nav className="hidden md:flex md:w-auto">
              <ul className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium md:p-0 border w-full rounded-lg md:flex md:flex-wrap md:space-x-6 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700 mr-4">
                {liOptions.map((li) => (
                  <li
                    key={li.name}
                    className={cn(
                      `cursor-pointer block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-[#56ecb5] hover:bg-gray-700 active:bg-gray-800 transition-colors`,
                      actveMenu === li.name &&
                        "md:text-[#56ecb5] bg-[#56ecb5] md:bg-transparent hover:bg-[#56ecb5] text-black"
                    )}
                    onClick={() => {
                      navigate(li.path);
                      localStorage.setItem(
                        localStorageKeys.pageActive,
                        li.name
                      );
                      setActiveMenu(li.name);
                    }}
                  >
                    {li.name}
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {windowWidth <= 768 && (
            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full md:block md:w-auto absolute top-30 left-0"
                >
                  <ul className="flex-col p-4 m-2 md:p-0 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700 z-40">
                    {liOptions.map((li) => (
                      <li
                        key={li.name}
                        className={cn(
                          `cursor-pointer block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-[#56ecb5] hover:bg-gray-700 active:bg-gray-800 transition-colors ${
                            actveMenu === li.name &&
                            "md:text-[#56ecb5] bg-[#56ecb5] md:bg-transparent hover:bg-[#56ecb5] text-black"
                          }`
                        )}
                        onClick={() => {
                          navigate(li.path);
                          setActiveMenu(li.name);
                          handleOpenMenu();
                        }}
                      >
                        {li.name}
                      </li>
                    ))}
                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
