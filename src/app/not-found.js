import Image from "next/image";

export default function StatisticPage() {

  return (
    <div className="flex items-center justify-center min-h-dvh">
        <main className="flex flex-col gap-8 row-start-2 items-center">
            <h1 className='text-8xl'>404</h1>
            <Image
                src="/zp.png"
                alt="Zergpool logo"
                width={90}
                height={90}
                priority
            />
            <span className='text-2xl'>Page not found</span>
        </main>
    </div>
  );
}