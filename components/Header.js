import { useState } from "react";
import React from "react";
import logo from "../public/Tradent-logo.png";
import Image from "next/image";
import Link from "next/link";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    
      <div className="bg-[#131313] z-40 fixed top-0 w-full border-b-2 border-white">
        <div className=" px-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-24">
          <div className=" flex items-center justify-between">
            <Link
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center z-[42]"
            >
              <div>
                {" "}
                <Image alt="Tradent" src={logo} className="w-[20px] mr-1" />
              </div>
              <span className="ml-2 text-2xl font-black tracking-wide text-gray-100 ">
                Tradent
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  href="/product"
                  aria-label="Our product"
                  title="Our product"
                  className="hover:underline font-medium tracking-wide text-gray-100 hover:opacity-75 transition-opacity duration-200 hover:text-teal-accent-400"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="hover:underline font-medium tracking-wide text-gray-100 hover:opacity-75 transition-opacity duration-200 hover:text-teal-accent-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  aria-label="About us"
                  title="About us"
                  className="hover:underline font-medium tracking-wide text-gray-100 hover:opacity-75 transition-opacity duration-200 hover:text-teal-accent-400"
                >
                  About us
                </Link>
              </li>

            </ul>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  href="/SignUp "
                  className="border-[1px] hover:bg-primaryGrad focus:opacity-80 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </Link>
              </li>
              <li>
                <Link
                  href="/SignIn"
                  className="border-[1px] hover:bg-secondaryGrad focus:opacity-80 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign in"
                  title="Sign in"
                >
                  Sign in
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-[100%] z-[999]">
                  <div className="p-5 bg-[#18181b] border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <Image
                            alt="Tradent"
                            src={logo}
                            className="w-[20px] mr-1"
                          />
                          <span className="ml-2 text-2xl font-black tracking-wide">
                            Tradent
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-[#23272F] focus:bg-[#1c2026] focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4 p-[24px]">
                        <li>
                          <Link
                            href="/product"
                            aria-label="Our product"
                            title="Our product"
                            className="hover:underline hover:opacity-75 transition-opacity font-medium tracking-wide duration-200 hover:text-deep-purple-accent-400"
                          >
                            Product
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="hover:underline font-medium tracking-wide hover:opacity-75 transition-opacity duration-200 hover:text-deep-purple-accent-400"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about"
                            aria-label="About us"
                            title="About us"
                            className="hover:underline font-medium tracking-wide hover:opacity-75 transition-opacity duration-200 hover:text-deep-purple-accent-400"
                          >
                            About us
                          </Link>
                        </li>
                        <div className="">
                          <ul className="flex justify-between flex-wrap gap-5 items-start mt-[24px]">
                            <li className="flex">
                              <Link
                                href="/"
                                className=" max-w-[300px] border-[1px] hover:bg-primaryGrad focus:opacity-80 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                              >
                                Sign up
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/"
                                className=" max-w-[300px] border-[1px] hover:bg-secondaryGrad focus:opacity-80 inline-flex items-center  justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign in"
                                title="Sign in"
                              >
                                Sign in
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
