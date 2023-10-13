"use client";

import Link from "next/link";
import React, { useState } from "react";

// icons
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";

// navigation menu
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-20 bg-white shadow md:bg-transparent md:bg-opacity-50 dark:bg-gray-800 md:backdrop-blur-md">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <Link href="/">
                <img
                  className="w-auto h-6 sm:h-7"
                  src="./assets/logo/logo.png"
                  alt=""
                />
              </Link>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${isOpen && "hidden"} w-6 h-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${!isOpen && "hidden"} w-6 h-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100 "
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
            >
              <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                <Link
                  href="/"
                  className="mt-2 text-xl font-semibold transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  features
                </Link>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4 grid-cols-1 ">
                          <Link
                            href={"/"}
                            className="block p-3 space-y-1 font-medium leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            About
                          </Link>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <Link
                  href="/"
                  className="mt-2 text-xl font-semibold transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  downloads
                </Link>
                <Link
                  href="/"
                  className="mt-2 text-xl font-semibold transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  docs
                </Link>
                <Link
                  href="/"
                  className="mt-2 text-xl font-semibold transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  support
                </Link>
                <Link
                  href="/"
                  className="mt-2 text-xl font-semibold transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  blog
                </Link>
              </div>

              <div className="flex justify-center gap-4 mt-6 lg:flex lg:mt-0 lg:-mx-2">
                <Link
                  href={"/"}
                  className="flex items-center gap-2 px-6 py-4 font-semibold bg-yellow-300 rounded-xl hover:bg-yellow-400"
                >
                  <BsFillFileEarmarkPostFill className="w-6 pr-2 border-r-2 border-r-black" />
                  Job Post
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-2 px-6 py-4 font-semibold text-white bg-blue-500 rounded-xl hover:bg-blue-600"
                >
                  <AiOutlineCloudDownload className="w-8 pr-2 border-r-2 border-r-white" />
                  CV Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
