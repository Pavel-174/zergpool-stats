export default function MainInfo({ mainInfo }) {

  return (
    <>
      <h2 className="text-xl mt-6">Main info</h2>
      <div className="flex flex-row justify-start w-10/12">
        <h2 className="text-l mt-6">
          Miners online: <span className={mainInfo?.miners?.length === undefined ? 'blur-lg' : 'text-green-500'}>{mainInfo?.miners?.length === undefined ? "1" : (" " + mainInfo?.miners?.length)}</span>
        </h2>
      </div>
      <ul className="flex flex-row justify-start w-10/12">
        {mainInfo?.miners?.map((miner, index) =>
          <li key={index}>ID: {miner?.id || index + 1} Hashrate: {miner?.hashrate} Algo: {miner?.algo}</li>
        )}     
      </ul>
    </>
  );
}