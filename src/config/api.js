export const CoinList = (currency, page) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=2

  `;

// export const SearchCoin = (currency, searchTerm) => {
//     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${searchTerm}`
// }

export const SingleCoin = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;
