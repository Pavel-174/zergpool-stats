"use client";
import Header from "@/components/Header";

export default function StatisticPage() {

  const fetchData = async () => {
    const response = await fetch("api/api/wallet?address=151dtEMndfwcdW4PepzUhMZugcjfctaZXY");
    console.log(response)
  }
    
  fetchData();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <Header />
      <div>
        
      </div>
    </main>
  );
}