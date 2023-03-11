import {React} from 'react';
import {FaRegNewspaper, FaChartLine, FaBook, FaChartPie} from 'react-icons/fa'
import Link from 'next/link';

const Features = () => {
    return (
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Our Services
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-[0px] left-[405px] z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Our</span>
            </span>{' '}
            Services
          </h2>
          <p className="opacity-50 font-semibold text-base text-gray-700 md:text-lg">
            A look into what we provide here at Tradent
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className=" text-2xl flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <FaRegNewspaper />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">Market information.</h6>
              <p className="mb-3 text-sm text-gray-900">
              Keep your finger on the pulse of the market with our comprehensive market information and news service. 
              Our platform provides you with up-to-date data from reputable sources, 
              presented in an easily understandable format, 
              so you can make informed trading decisions that can drive your success. 
              Our curated news feed provides the latest insights into market trends, 
              enabling you to stay ahead of the competition and make the most of opportunities as they arise.
              </p>
              <Link
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <div className=" text-2xl flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <FaChartLine />
              </div>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Track your instruments.
              </h6>
              <p className="mb-3 text-sm text-gray-900">
              With our instrument tracking feature, you can monitor your investments 
              in real-time and receive alerts when certain conditions are met. 
              You`ll be able to view your portfolio performance, 
              track your gains and losses, and gain insights into your trading habits, 
              all in one convenient location.
              </p>
              <Link
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <div className=" text-2xl flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <FaBook />
              </div>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Trade Logging.
              </h6>
              <p className="mb-3 text-sm text-gray-900">
              Effective investment management requires careful tracking and analysis of your trades. 
              With our trade logging feature, you can easily record and analyze your trades, 
              helping you to learn from your successes and mistakes. 
              You can customize the fields you want to track, 
              and our easy-to-use interface makes it simple to manage your trade history. 
              With our intuitive reports, you`ll gain valuable insights into your trading patterns 
              and be able to optimize your investment strategies for maximum profitability.
              </p>
              <Link
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <div className=" text-2xl flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <FaChartPie />
              </div>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                A clean Dashboard.
              </h6>
              <p className="mb-3 text-sm text-gray-900">
              Our highly customizable dashboards give you a comprehensive view of your portfolio`s 
              performance and trading activity, all at a glance. You have the ability to create your 
              own custom widgets, charts, and graphs to display the information that is most relevant
              to you, so you can stay informed and make smarter investment decisions. 
              </p>
              <Link
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Features;