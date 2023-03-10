 import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/Tradent-logo.png'
import Header from '../components/Header.js'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Link new way to manage trade data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className=" bg-[#18181b] min-h-screen ">
        
        <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <Link href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <Image className=" delay-500" alt="logo" src={logo} />
                </div>
              </Link>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
              </span>{' '}
                <span className=" text-6xl ">Discover Link <span className=" text-secondaryGrad">new</span> way to manage <span className=" text-primaryGrad">trade data</span>.</span>
              </h2>
              <p className="text-xl text-gray-700 md:text-xl font-semibold opacity-50">
              Link Comprehensive Solution for Tracking Trades, Instruments, and Market Information.
              </p>
            </div>
            <div>
              <Link
                href="/"
                className=" hover:opacity-75 bg-gradient-to-r from-primaryGrad to-secondaryGrad inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
            </div>
            <div className="mt-10">
              <h1 className="font-extrabold opacity-25">Coming soon.</h1>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default Home;