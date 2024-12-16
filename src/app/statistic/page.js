"use client";
import Header from "@/components/Header";

export default function StatisticPage() {

  const fetchData = async () => {
    const response = await fetch("/api/example", config);
    const data = response.json();
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