import React from "react";

import Header from "@/components/Header";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Tradent</title>
        <meta name="description" content="A new way to manage trade data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-[#18181b] min-h-screen mt-[75px] sm:[80px]">
        <section className="px-[150px]">
          <div className="flex items-start flex-col">
            <h1 className="text-6xl">Who we are</h1>
            <p className="text-xl">And what we do</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default about;
