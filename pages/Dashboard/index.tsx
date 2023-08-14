import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import DashboardHeader from "@/components/DashboardComponents/DashboardHeader";
import MobileSidebar from "@/components/DashboardComponents/MobileSidebar";
import { useState } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
        <Head>
          <title>Tradent</title>
          <meta
            name="description"
            content="A new way to manage trade data."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className="min-h-screen bg-[#131313]">
          <DashboardHeader toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <MobileSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className="py-[50px] px-[50px]">
        
        </main>
      </div>
    </>
  );
};

export default Dashboard;
