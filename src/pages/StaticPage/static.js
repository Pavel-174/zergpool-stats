import Image from "next/image";

export default function StatisticPage() {
  return (
    <>
        <Image
          src="/zp.png"
          alt="Zergpool logo"
          width={90}
          height={90}
          priority
        />
    </>
  );
}