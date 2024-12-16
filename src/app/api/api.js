import nc from "next-connect";
import cors from "cors";
// const WALLET_ADDRESS = localStorage.getItem('wallet');

const handler = nc()
  // use connect based middleware
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch(remoteServerUrl, config);
    res.json(response);
  });

export default handler;
