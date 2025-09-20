
// demo backend: api/accounts/fetch.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const body = req.body || {};
  const { broker, server, account_number, investor_password } = body;
  if (!broker || !server || !account_number || !investor_password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // For demo: return mock data
  const now = new Date().toISOString();
  const mock = {
    status: 'ok',
    account: {
      account_number: account_number,
      broker: broker,
      balance: 10000.00,
      equity: 9500.00,
      currency: 'USD',
      margin: 200.00,
      free_margin: 9300.00,
      margin_level_percent: 4750.00,
      realized_profit: 500.00,
      unrealized_profit: -50.00,
      last_synced: now
    },
    positions: [
      {
        ticket: 123456,
        symbol: "EURUSD",
        type: "BUY",
        volume: 0.10,
        open_price: 1.1000,
        current_price: 1.1050,
        profit: 50.00,
        open_time: "2025-09-19T12:00:00Z"
      }
    ],
    recent_trades: [
      {
        ticket: 123400,
        symbol: "USDJPY",
        type: "SELL",
        volume: 0.20,
        open_time: "2025-09-18T10:00:00Z",
        close_time: "2025-09-18T12:00:00Z",
        open_price: 156.50,
        close_price: 156.30,
        profit: 40.00
      }
    ]
  };

  // Simulate network delay
  await new Promise(r => setTimeout(r, 500));

  return res.status(200).json(mock);
}
