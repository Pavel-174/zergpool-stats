import Image from "next/image";

export default function HomePage() {
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
            className="mt-4 p-2 block border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-4/5 max-w-xl"
          />
        </div>
        <button 
          type="button" 
          className="bg-green-500 text-black py-2 px-4 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-4 w-4/5 max-w-xl"
        >
          Show stats
        </button>
    </>
  );
}