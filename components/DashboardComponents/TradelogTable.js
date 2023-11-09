import {SearchSelect, SearchSelectItem, NumberInput, Title, Button, TextInput, Card, Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, TableFoot, TableFooterCell  } from "@tremor/react";
import { db } from "@/firebase/clientApp";
import { collection, doc, getDocs, query, where, onSnapshot, updateDoc } from "firebase/firestore";
import { PlusIcon } from "@heroicons/react/outline";
import { useFirebase } from "@/firebase/firebaseContext";


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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { currentUser } = useFirebase();

    const tradeAddedToast = () => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        }, 3000)
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

  
    useEffect(() => {
        if (!currentUser) {
            // If there is no user, don't fetch anything
            return;
        }
        const tradesCollectionRef = collection(db, 'users', currentUser.uid, 'Trades');
    
         // Set up a listener on the user-specific Trades subcollection
        const unsubscribe = onSnapshot(tradesCollectionRef, (snapshot) => {
            const userTrades = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            setTrades(userTrades);
        });

        return () => unsubscribe();
      }, [currentUser]);

      const handleSubmit = async () => {
        const newTrade = {
            date: new Date().toLocaleDateString(),
            time,
            symbol,
            lots: parseFloat(lots.toFixed(2)),
            tradeType,
            executionPrice,
            exitPrice,
            profitLoss,
        }

        if (!currentUser) {
            // Handle the case where there is no user signed in
            return;
        }

        const tradesCollectionRef = collection(db, 'users', currentUser.uid, 'Trades');
        await addDoc(tradesCollectionRef, newTrade);

        closeModal();

        setDate('');
        setTime('');
        setSymbol('');
        setLots(0);
        setTradeType('');
        setExecutionPrice(0);
        setExitPrice(0);
        setProfitLoss(0);

        tradeAddedToast();
      }
    
    return(
        <Card className=" bg-[#191919] rounded-[5px] p-4">
                <div className="flex justify-between items-center mb-[16px]">
                    <Title className="text-white font-bold text-[30px]">TradeLog</Title>
                    <button className="p-[5px]" onClick={()=>window.my_modal_3.showModal()}><PlusIcon className="h-8 w-8 text-gray-500"/></button>
                </div>
                <dialog open={isModalOpen} id="my_modal_3" className="modal">
                    <form method="dialog" className="rounded-[10px] border-[1px] border-white bg-[#191919] p-[30px] w-[90%] flex flex-col gap-3 overflow-auto h-[700px]">
                        <div className="flex justify-between">
                            <Title className="text-white font-bold text-[30px]">Add Trade</Title>
                            <button className="btn-ghost"><XIcon className="w-[40px] h-[40px] " /></button>
                        </div>

                        <div>
                        <label className="label">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="bg-[#191919] text-white border-none hover:bg-[#191919] rounded p-2"
                        />
                        </div>

                        {/* Time Input */}
                        <div>
                            <label className="label">Time</label>
                            <input type="time" className="bg-[#191919] text-tremor-content-inverted border-none hover:bg-[#191919] rounded p-2" value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>

                        {/* Symbol Input */}
                        <div>
                            <label className="label">Symbol</label>
                            <TextInput className="text-tremor-content-strong" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
                        </div>

                        {/* Lots Input */}
                        <div>
                            <label className="label">Lots</label>
                            <NumberInput min={0} value={lots} onValueChange={setLots} />
                        </div>

                        {/* Trade Type Input */}
                        <div>
                            <label className="label">Trade Type</label>
                            <SearchSelect value={tradeType} onValueChange={(value) => setTradeType(value)} className="text-tremor-content-strong">
                            <SearchSelectItem value="buy">Buy</SearchSelectItem>
                            <SearchSelectItem value="sell">Sell</SearchSelectItem>
                            </SearchSelect>
                        </div>

                        {/* Execution Price Input */}
                        <div>
                            <label className="label">Price of Execution</label>
                            <NumberInput min={0} step="any" value={executionPrice} onValueChange={setExecutionPrice} />
                        </div>

                        {/* Exit Price Input */}
                        <div>
                            <label className="label">Exit Price</label>
                            <NumberInput min={0} step="any" value={exitPrice} onValueChange={setExitPrice} />
                        </div>

                        {/* Profit/Loss Input */}
                        <div>
                            <label className="label">Profit/Loss</label>
                            <NumberInput min={0} step="any" value={profitLoss} onValueChange={setProfitLoss} />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button type="button" className="btn bg-secondaryGrad text-white" onClick={handleSubmit}>Add Trade</button>
                        </div>


                    </form>
                </dialog>

            {showToast && 
            <div className={`toast transition-all ease-in-out duration-500 ${showToast ? '' : 'scale-0 opacity-0'}`}>
                <div className="alert alert-info">
                    <span>Trade added!</span>
                </div>
            </div>}
                
            <Table className="b rounded-[5px] p-4">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Date</TableHeaderCell>
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
                    {trades.map((trade) => (
                        <TableRow key={trades}>
                            <TableCell>{trade.date}</TableCell>
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