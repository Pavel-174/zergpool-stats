export default function InfoTable({ mainInfo }) {

  return (
    <table className="w-10/12 border-separate border border-slate-300">
        <tbody>
            <tr className="flex items-start mx-auto p-4 border border-slate-300">
                <td className="w-10/12">
                    Payment threshold
                </td>
                <td className={`w-2/12 min-w-fit pl-2 flex flex-col ${(mainInfo?.minpay ||  mainInfo?.currency)=== undefined && 'blur-lg'}`}>
                    {(mainInfo?.minpay + " " + mainInfo?.currency).toString()}
                </td>
            </tr>
            <tr className="flex items-start mx-auto p-4 border border-slate-300">
                <td className="w-10/12">
                    Balance payment on Sunday late evening (CET timezone)  
                </td>
                <td className={`w-2/12 min-w-fit pl-2 flex flex-col ${(mainInfo?.minpay_sunday ||  mainInfo?.currency)=== undefined && 'blur-lg'}`}>
                    {(mainInfo?.minpay_sunday + " " + mainInfo?.currency).toString()}
                </td>
            </tr>
            <tr className="flex items-start mx-auto p-4 border border-slate-300">
                <td className="w-10/12">
                    Estimated network tx fee for your payment (will be deducted from balance during payment)
                </td>
                <td className={`w-2/12 min-w-fit pl-2 flex flex-col ${mainInfo?.txfee === undefined && 'blur-lg'}`}>
                    {('~'+ " " + mainInfo?.txfee).toString()}
                </td>
            </tr>
            <tr className="flex items-start mx-auto p-4 border border-slate-300">
                <td className="w-10/12">
                    Balance
                </td>
                <td className={`w-2/12 min-w-fit pl-2 flex flex-col ${(mainInfo?.balance ||  mainInfo?.minpay)=== undefined && 'blur-lg'}`}>
                    {(mainInfo?.balance + " " + mainInfo?.currency).toString()}
                    <br/>
                    {((mainInfo?.balance / (mainInfo?.minpay / 100)).toFixed(2) + '%').toString()}
                </td>
            </tr>
        </tbody>
    </table>
  );
}