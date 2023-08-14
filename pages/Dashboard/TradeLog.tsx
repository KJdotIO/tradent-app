import Image from "next/image";
import Header from "@/components/Header";
import Head from "next/head";
import DashboardHeader from "@/components/DashboardComponents/DashboardHeader";
import { Grid, Col, Card, Text, Metric, Flex, BadgeDelta, AreaChart, Title, Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, TableFoot, TableFooterCell, Badge } from "@tremor/react";
import MobileSidebar from "@/components/DashboardComponents/MobileSidebar";
import { useState } from "react";
import { useFirebase } from "../../firebase/firebaseContext";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import TradelogTable from "@/components/DashboardComponents/TradelogTable";

import { InfoModalTradeLog } from "@/components/InfoModal";



const TradeLog = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { currentUser } = useFirebase();

    const dataFormatter = (number: number) => {
      return "£ " + Intl.NumberFormat("gb").format(number).toString();
    };
  
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
        <InfoModalTradeLog/>
  
        <div className="min-h-screen bg-[#131313]">
          <DashboardHeader toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <MobileSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className="py-[50px] px-[50px]">
        {/* <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-[30px]">
            <Card className="rounded-[10px] bg-dark-tremor-background-muted">
              <Flex>
                <Text className="text-gray-400">Total Profit</Text>
                <BadgeDelta className=" bg-green-400 rounded-[20px]" deltaType="moderateIncrease" isIncreasePositive={true} size="xs">+10.4%</BadgeDelta>
              </Flex>
              <Metric className="text-white"></Metric>
            </Card>
        </Grid> */}

        <Grid>
            <TradelogTable />
        </Grid>
        </main>
      </div>
    </>
  );
};

export default TradeLog;
