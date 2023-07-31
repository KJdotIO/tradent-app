import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

import heroBG from "../public/header-gradient.png";

import logo from "../public/Tradent-logo.png";
import Header from "../components/Header.js";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { FaChevronDown } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";




// import { fetchTimeSeries } from "../services/alphaVantage";

const Home = () => {

  const [fadeUp] = useState(true);

  // const [eurusdSymbol, seteurusdSymbol] = useState([])
  // const [EUbidPrice, setEUbidPrice] = useState('')

  // //EURUSD
  // async function loadCurrencyData() {
  //   const fromCurrency = "GBP";
  //   const toCurrency = "USD";
  //   const data = await fetchTimeSeries(fromCurrency, toCurrency);

  //   // const bidPrice = data["Realtime Currency Exchange Rate"]["8. Bid Price"];

  //   //Symbol data
  //   seteurusdSymbol(data)

  //   if (data && data["Realtime Currency Exchange Rate"]) {
  //     const bidPrice = data["Realtime Currency Exchange Rate"]["8. Bid Price"];
  //     setEUbidPrice(bidPrice);
  //   } else {
  //     console.error('Unexpected API response:', data);
  //   }

  //   setTimeout(() => {
  //     loadCurrencyData();
  //   }, 20000);
  // }

  useEffect(() => {
    // loadCurrencyData();
  }, []);


  return (
    <>
      <Head>
        <title>Tradent</title>
        <meta name="description" content="A new way to manage trade data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Open the modal using ID.showModal() method */}
      <button className="z-[900] bottom-0 right-0 mr-[20px] mb-[20px] btn fixed bg-secondaryGrad text-white hover:bg-opacity-75" onClick={()=>window.my_modal_1.showModal()}><FaInfo/></button>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box border-[1px] bg-[#131313] rounded-[5px] p-[50px]">
            <h1 className=" font-bold text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 bg-clip-text animate-text">Hello!</h1>
            <p className=" py-4">I'm excited to let you know that this app is currently under development. It's going to take some time before it's fully complete, but I promise it'll be worth the wait.
<br />
<br />
To get things started, I'm releasing the TradeLog feature first. This will let you try out the app and provide valuable feedback to me. Your feedback will be incredibly helpful for me to improve the app and make it better suit your needs.
<br />
<br />
After the initial release, I'll be rolling out updates addressing any issues and introducing new features.
<br /><br />
Thanks for your patience and understanding. Stay tuned for more exciting updates! ✅</p>
            <div className="modal-action flex justify-between items-center">
              <p>- KJ</p>
              <button className=" bg-opacity-0 border-[1px] border-white text-white p-[10px] rounded-[5px] hover:scale-110 ease-in-out transition">Enough Yappin!</button>
            </div>
          </form>
        </dialog>
      
      <main className=" bg-[#131313] min-h-screen mt-[75px] sm:[80px]">

        <section>
          <div className=" opacity-75 w-full h-full overflow-hidden">
            <Image
              src={heroBG}
              alt=""
              className="object-fit w-full h-full transform -scale-y-100 absolute top-[55%] left-[45%] max-w-none overflow-clip -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                <Link href="/" className="mb-6 sm:mx-auto">
                  <Transition
                    show={fadeUp}
                    appear={true}
                    enter="duration-1000"
                    enterFrom="opacity-0 translate-y-5"
                    enterTo="opacity-100 translate-y-0"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                      <Image className=" delay-500" alt="logo" src={logo} />
                    </div>
                  </Transition>
                </Link>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-6 font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <Transition
                      show={fadeUp}
                      appear={true}
                      enter="delay-100 duration-1000"
                      enterFrom="opacity-0 translate-y-5"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <span className="relative inline-block">
                        <svg
                          viewBox="0 0 52 24"
                          fill="currentColor"
                          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                          <defs>
                            <pattern
                              id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                              x="0"
                              y="0"
                              width=".135"
                              height=".30"
                            >
                              <circle cx="1" cy="1" r=".7" />
                            </pattern>
                          </defs>
                          <rect
                            fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                            width="52"
                            height="24"
                          />
                        </svg>
                      </span>{" "}
                      <span className=" text-6xl ">
                        Discover a <span className=" text-cyan-400">new</span>{" "}
                        way to manage{" "}
                        <span className=" text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 bg-clip-text animate-text">
                          trade data
                        </span>
                        .
                      </span>
                    </Transition>
                  </h2>

                  <Transition
                    show={fadeUp}
                    appear={true}
                    enter="delay-200 duration-1000"
                    enterFrom="opacity-0 translate-y-5"
                    enterTo="opacity-100 translate-y-0"
                  >
                    <p className="text-xl md:text-xl font-semibold opacity-50">
                      A Comprehensive Solution for Tracking Trades, Instruments,
                      and Market Information.
                    </p>
                  </Transition>
                </div>
                <div>
                  <Transition
                    show={fadeUp}
                    appear={true}
                    enter="delay-300 duration-1000"
                    enterFrom="opacity-0 translate-y-5"
                    enterTo="opacity-100 translate-y-0"
                  >
                    <Link
                      href="/SignUp"
                      className="
                  bg-gradient-to-tr
                  from-primaryGrad
                  via-[#4ee1f7]
                  to-secondaryGrad
                  items-center justify-center
                  px-[2px]
                  py-[17px]
                  rounded-md
                  animate-gradient-xy
                  "
                    >
                      <span className="bg-[#18181b] px-[32px] py-[15px] rounded-md">
                        Get Started
                      </span>
                    </Link>
                  </Transition>
                </div>
                <Transition
                  show={true}
                  appear={true}
                  enter="delay-500 duration-1000 infinite"
                  enterFrom="opacity-0 translate-y-[-20px]"
                  enterTo="opacity-100 translate-y-0"
                >
                  <div className=" mt-[100px] text-6xl flex justify-center items-center">
                    <FaChevronDown />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Transition
            show={fadeUp}
            appear={true}
            enter="delay-500 duration-1000"
            enterFrom="opacity-0 translate-y-5"
            enterTo="opacity-100 translate-y-0"
          >
            <Features />
          </Transition>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
