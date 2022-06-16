/** @format */

import axios from "axios";

export const getDetailCoinData = async (coinId) => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const getCoinMarketChart = async (coinId) => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const getMarketData = async (pageNumber) => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getWatchlistedCoin = async (pageNumber, coinId) => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
