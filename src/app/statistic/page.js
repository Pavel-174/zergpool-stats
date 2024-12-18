"use client";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function StatisticPage() {
  const address = localStorage.getItem("wallet")

  const [mainInfo, setMainInfo] = useState({})

  const getMainInfo = async (address) => {
    const response = await fetch(`api/api/walletEx?address=${address}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => setMainInfo(response))
  }

  const getGraph = async (address) => {
    const response = await fetch(`api/site/graph_user_results?address=${address}&algo=sha256`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => setMainInfo(response))
  }

  useEffect(() => {
    getMainInfo(address);
    getGraph(address);
  }, [address])

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <Header />
      <h2 className="text-xl mt-6">Main info</h2>
      <div className="flex flex-row justify-start w-10/12">
        <h2 className="text-l mt-6">
          Miners online: <span className={mainInfo?.miners?.length === undefined ? 'blur-lg' : null}>{mainInfo?.miners?.length === undefined ? "1" : (" " + mainInfo?.miners?.length)}</span>
        </h2>
      </div>
      <ul className="flex flex-row justify-start w-10/12">
        {mainInfo?.miners?.map((miner, index) =>
          <li key={index}>ID: {miner?.id || index + 1} Hashrate: {miner?.hashrate} Algo: {miner?.algo}</li>
        )}     
      </ul>
      <table className="w-10/12 border-separate border border-slate-300">
        <tbody>
          <tr className="flex items-start mx-auto p-4 border border-slate-300">
            <td className="w-10/12">
              Payment threshold
            </td>
            <td className={`w-2/12 pl-2 flex flex-col ${(mainInfo?.minpay ||  mainInfo?.currency)=== undefined && 'blur-lg'}`}>
              {(mainInfo?.minpay + " " + mainInfo?.currency).toString()}
            </td>
          </tr>
          <tr className="flex items-start mx-auto p-4 border border-slate-300">
            <td className="w-10/12">
              Balance payment on Sunday late evening (CET timezone)  
            </td>
            <td className={`w-2/12 pl-2 flex flex-col ${(mainInfo?.minpay_sunday ||  mainInfo?.currency)=== undefined && 'blur-lg'}`}>
              {(mainInfo?.minpay_sunday + " " + mainInfo?.currency).toString()}
            </td>
          </tr>
          <tr className="flex items-start mx-auto p-4 border border-slate-300">
            <td className="w-10/12">
              Estimated network tx fee for your payment (will be deducted from balance during payment)
            </td>
            <td className={`w-2/12 pl-2 flex flex-col ${mainInfo?.txfee === undefined && 'blur-lg'}`}>
              {('~'+ " " + mainInfo?.txfee).toString()}
            </td>
          </tr>
          <tr className="flex items-start mx-auto p-4 border border-slate-300">
            <td className="w-10/12">
              Balance
            </td>
            <td className={`w-2/12 pl-2 flex flex-col ${(mainInfo?.balance ||  mainInfo?.minpay)=== undefined && 'blur-lg'}`}>
              {(mainInfo?.balance + " " + mainInfo?.currency).toString()}
              <br/>
              {((mainInfo?.balance / (mainInfo?.minpay / 100)).toFixed(2) + '%').toString()}
            </td>
          </tr>
        </tbody>
      </table> 
    </main>
  );
}