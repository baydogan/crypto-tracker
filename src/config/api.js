//endpointlerin tutulduğu dosya

export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1`;

export const HistoricalChart = (id, days, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const SingleCoin = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;

export const cryptoNews = (searchTerm) =>
  `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=popularity&apiKey=${process.env.REACT_APP_KEY}`;

export const allCryptoNews = () => 
  `https://newsapi.org/v2/everything?q=Blockchain&sortBy=popularity&apiKey=38a86b7e0bf74d13b68a07dfd9a30086`;