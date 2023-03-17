const apiKey = process.env.ALPHA_API_KEY;

export async function fetchTimeSeries(fromCurrency, toCurrency) {
  const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}