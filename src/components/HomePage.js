"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function HomePage() {
  const address = localStorage.getItem("wallet");
  const [wallet, setWallet] = useState('');

  const {replace} = useRouter();

  useEffect(() => {
    if (address !== null) {
      replace('/statistic')
    }
  }, [])

  return (
    <>
        <Image
          src="/zp.png"
          alt="Zergpool logo"
          width={90}
          height={90}
          priority
        />
        <div className="flex flex-col items-center w-lvw">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your crypto wallet:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required="" 
            placeholder="Wallet from your settings" 
            className="mt-4 p-2 block border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-4/5 max-w-xl text-black"
            onChange={(event) => setWallet(event.target.value)}
            minLength={34}
            maxLength={62}
          />
        </div>
        <button 
          type="button" 
          className="bg-green-500 text-black py-2 px-4 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-600 mb-4 w-4/5 max-w-xl"
          disabled={(wallet.length >= 34 && wallet.length <= 62) ? false : true}
          onClick={() => {localStorage.setItem('wallet', wallet); wallet !== '' && replace('/statistic')}}
        >
          Show stats
        </button>
    </>
  );
}