  export const getMainInfo = async (address, setMainInfo) => {
    const response = await fetch(`api/api/walletEx?address=${address}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => setMainInfo(response))
  }

  export const getPowerGraph = async (address, setChartInfo) => {
    const response = await fetch(`api/site/graph_user_results?address=${address}&algo=sha256`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => setChartInfo(response))
  }

  export const getBalanceGraph = async (address, setChartInfo) => {
    const response = await fetch(`api/site/graph_earnings_results?address=${address}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => setChartInfo(response))
  }
