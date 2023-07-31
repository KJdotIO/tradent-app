import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Sidebar from "@/components/DashboardComponents/DashSidebar";
const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Tradent</title>
        <meta name="description" content="A new way to manage trade data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen bg-[#131313]">
        <div className="h-screen overflow-y-hidden">
          <Sidebar />
        </div>
        <main className="flex-grow overflow-y-auto"></main>
      </div>
    </>
  );
};

export default Dashboard;
