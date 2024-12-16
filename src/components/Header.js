import Image from "next/image";

export default function Header() {
    
  return (
    <header className="flex flex-row items-center pt-4">
        <Image
            src="/zp.png"
            alt="Zergpool logo"
            width={30}
            height={30}
            priority
        />
        <h1 className="ml-4">YOUR STATS</h1>
    </header>
  );
}