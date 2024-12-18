import Image from "next/image";
import { cutAddress } from "@/utils/helpers";
import { useRouter } from "next/navigation";

export default function Header() {
  const address = localStorage.getItem("wallet");
  const {replace} = useRouter();
    
  return (
    <header className="flex flex-row items-center justify-between pt-4 w-10/12">
      <div className="flex flex-row items-center min-w-fit pr-3">
        <Image
              src="/zp.png"
              alt="Zergpool logo"
              width={32}
              height={32}
              priority
          />
          <h1 className="ml-4">YOUR STATS</h1>
      </div>
      <div className="flex flex-row items-center">
        <div>
          <span className="text-zinc-500">Wallet:</span>
          <span className="text-green-500">{" " + cutAddress(address, 6, 6) }</span>
        </div>
        <button 
          className="ml-4"
          onClick={() => {
              localStorage.clear();
              replace('/');
            }
          }
        >
          <Image
                src="/exit.svg"
                alt="Exit"
                width={32}
                height={32}
                priority
                className="min-w-8"
            />
        </button>
      </div>
    </header>
  );
}