"use client";
import Header from "@/components/Header";
import InfoTable from "@/components/InfoTable";
import MainInfo from "@/components/MainInfo";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});
import { getMainInfo, getPowerGraph, getBalanceGraph } from "@/api/api";
import { useRouter } from "next/navigation";

export default function StatisticPage() {
  const {replace} = useRouter();
  const address = localStorage.getItem("wallet");

  const [mainInfo, setMainInfo] = useState({});
  const [powerInfo, setPowerInfo] = useState({});
  const [balanceInfo, setBalanceInfo] = useState({});

  useEffect(() => {
    if (address !== null) {
      getMainInfo(address, setMainInfo);
      getPowerGraph(address, setPowerInfo);
      getBalanceGraph(address, setBalanceInfo);
    } else {
      replace('/')
    }
  }, [address])

  const powerData = {
    labels: powerInfo?.[0]?.map(item => item[0]),
    datasets: [
      {
        label: 'Hashrate Chart th/s',
        data: powerInfo?.[0]?.map(item => item[1]*1000),
        fill: false,
        borderColor: 'rgb(34, 197, 94)',
        tension: 1,
      },
    ],
  };

  const balanceData = {
    labels: balanceInfo?.[0]?.map(item => item[0]),
    datasets: [
      {
        label: 'Balance Chart BTC',
        data: balanceInfo?.[0]?.map(item => item[1]),
        fill: true,
        round: 'off',
        borderColor: 'rgb(34, 197, 94)',
        tension: 1,
      },
    ],
  };

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <Header />
      <MainInfo mainInfo={mainInfo} />
      <InfoTable mainInfo={mainInfo} />
      <div className="w-10/12 mb-8">
        <Line data={powerData}/>
        <Line data={balanceData}/>
      </div>
    </main>
  );
}