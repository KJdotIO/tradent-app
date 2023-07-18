// import { useState, useEffect } from "react";

import productGrad from "../public/products-gradient.png";

import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

const product = () => {
  // const [eurusdSymbol, seteurusdSymbol] = useState([])
  // const [EUbidPrice, setEUbidPrice] = useState('')

  return (
    <>
      <Head>
        <title>Tradent</title>
        <meta name="description" content="A new way to manage trade data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="bg-[#18181b] min-h-screen mt-[83px] sm:[80px]">
          <div className="w-full h-full overflow-hidden"></div>
        </section>
      </main>
    </>
  );
};

export default product;
