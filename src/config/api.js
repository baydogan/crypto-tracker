export const CoinList = (currency, page) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1

  `;

// export const SearchCoin = (currency, searchTerm) => {
//     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${searchTerm}`
// }

export const SingleCoin = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;

export const cryptoNews = (searchTerm) =>
  `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=popularity&apiKey=38a86b7e0bf74d13b68a07dfd9a30086`;
