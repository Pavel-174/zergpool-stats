"use client";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function StatisticPage() {
  const address = localStorage.getItem("wallet")

  const [mainInfo, setMainInfo] = useState({})

  const fetchData = async (address) => {
    const response = await fetch(`api/walletEx?address=${address}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => setMainInfo(response))
  }

  useEffect(() => {
    fetchData(address);
  }, [address])

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <Header />
      <h2 className="text-xl mt-6">Main info</h2>
      <table className="w-10/12 border-separate border border-slate-300">
        <tbody>
          <tr className="flex items-start mx-auto p-4 border border-slate-300">
            <td className="w-10/12">
              Payment threshold
            </td>
            <td className="w-2/12 pl-2 flex flex-col">
              {(mainInfo?.minpay + mainInfo?.currency).toString()}
            </td>
          </tr>
          <tr className="flex items-start mx-auto p-4 border border-slate-300">
            <td className="w-10/12">
              Balance payment on Sunday late evening (CET timezone)  
            </td>
            <td className="w-2/12 pl-2 flex flex-col">
              {(mainInfo?.minpay_sunday + mainInfo?.currency).toString()}
            </td>
          </tr>
          <tr className="flex items-start mx-auto p-4 border border-slate-300">
            <td className="w-10/12">
              Estimated network tx fee for your payment (will be deducted from balance during payment)
            </td>
            <td className="w-2/12 pl-2 flex flex-col">
              {('~'+ " " + mainInfo?.txfee).toString()}
            </td>
          </tr>
          <tr className="flex items-start mx-auto p-4 border border-slate-300">
            <td className="w-10/12">
              Balance
            </td>
            <td className="w-2/12 pl-2 flex flex-col">
              {(mainInfo?.balance + mainInfo?.currency).toString()}
              <br/>
              {((mainInfo?.balance / (mainInfo?.minpay / 100)).toFixed(2) + '%').toString()}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}