import {SearchSelect, SearchSelectItem, NumberInput, Title, Button, TextInput, Card, Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, TableFoot, TableFooterCell  } from "@tremor/react";
import { db } from "@/firebase/clientApp";
import { collection, doc, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { PlusIcon } from "@heroicons/react/outline";


import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import { addDoc } from 'firebase/firestore';


const TradelogTable = () => {
    const [trades, setTrades] = useState([])
    const [showToast, setShowToast] = useState(false)

    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [symbol, setSymbol] = useState('');
    const [lots, setLots] = useState(0);
    const [tradeType, setTradeType] = useState('');
    const [executionPrice, setExecutionPrice] = useState(0);
    const [exitPrice, setExitPrice] = useState(0);
    const [profitLoss, setProfitLoss] = useState(0);

    const tradeAddedToast = () => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        }, 3000)
    }


  
    useEffect(() => {
        const tradesCollection = collection(db, 'Trades');
    
        // Set up a listener on the Trades collection
        const unsubscribe = onSnapshot(tradesCollection, (snapshot) => {
          const tradeList = snapshot.docs.map((doc) => doc.data());
          setTrades(tradeList);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

      const handleSubmit = async () => {
        const newTrade = {
            date,
            time,
            symbol,
            lots,
            tradeType,
            executionPrice,
            exitPrice,
            profitLoss,
        }

        const tradeCollection = collection(db, 'Trades');
        await addDoc(tradeCollection, newTrade);

        tradeAddedToast();
      }
    
    return(
        <Card className=" bg-[#191919] rounded-[5px] p-4">
                <div className="flex justify-between items-center mb-[16px]">
                    <Title className="text-white font-bold text-[30px]">TradeLog</Title>
                    <button className="p-[5px]" onClick={()=>window.my_modal_3.showModal()}><PlusIcon className="h-8 w-8 text-gray-500"/></button>
                </div>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="rounded-[10px] border-[1px] border-white bg-[#191919] p-[30px] w-[90%] flex flex-col gap-3 overflow-auto h-[700px]">
                        <div className="flex justify-between">
                            <Title className="text-white font-bold text-[30px]">Add Trade</Title>
                            <button className="btn-ghost"><XIcon className="w-[40px] h-[40px] " /></button>
                        </div>

                        {/* <div>
                            <label className="label">Date</label>
                            <DateRangePicker value={date} className=" bg-[#191919] border-none hover:bg-[191919]" enableSelect={false} />
                        </div> */}

                        <div>
                            <label className="label">Time</label>
                            <input type="time" className="bg-[#191919] text-tremor-content-inverted border-none hover:bg-[#191919] rounded p-2" value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>

                        <div>
                            <label className="label">Symbol</label>
                            <SearchSelect className="text-tremor-content-strong">
                                <SearchSelectItem value="1">
                                    Yessirr
                                </SearchSelectItem>
                            </SearchSelect>
                        </div>

                        <div>
                            <label className="label">Lots</label>
                        </div>

                        <div>
                            <label className="label">Trade Type</label>
                        </div>

                        <div>
                            <label className="label">Price of Execution</label>
                        </div>

                        <div>
                            <label className="label">Exit Price</label>
                        </div>

                        <div>
                            <label className="label">Profit/Loss</label>
                        </div>

                        <div>
                            <button className="btn bg-secondaryGrad text-white" onClick={handleSubmit}>Add Trade</button>
                        </div>



                    </form>
                </dialog>

            {showToast && 
            <div className={`toast transition-all ease-in-out duration-500 ${showToast ? '' : 'scale-0 opacity-0'}`}>
                <div className="alert alert-info">
                    <span>New message arrived.</span>
                </div>
            </div>}
                
            <Table className="b rounded-[5px] p-4">
                <TableHead>
                    <TableRow>
                        {/* <TableHeaderCell>Date</TableHeaderCell> */}
                        <TableHeaderCell>Time</TableHeaderCell>
                        <TableHeaderCell>Symbol</TableHeaderCell>
                        <TableHeaderCell>Lots</TableHeaderCell>
                        <TableHeaderCell>Trade Type</TableHeaderCell>
                        <TableHeaderCell>Price of Execution</TableHeaderCell>
                        <TableHeaderCell>Exit Price</TableHeaderCell>
                        <TableHeaderCell>Profit/Loss</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trades.map((trade, index) => (
                        <TableRow key={index}>
                            {/* <TableCell>{trade.date}</TableCell> */}
                            <TableCell>{trade.time}</TableCell>
                            <TableCell>{trade.symbol}</TableCell>
                            <TableCell>{trade.lots}</TableCell>
                            <TableCell>{trade.tradeType}</TableCell>
                            <TableCell>{trade.executionPrice}</TableCell>
                            <TableCell>{trade.exitPrice}</TableCell>
                            <TableCell>{trade.profitLoss}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        
        </Card>
    )
}

export default TradelogTable