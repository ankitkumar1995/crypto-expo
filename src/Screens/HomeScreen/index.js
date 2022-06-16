/** @format */

import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import cryptoCurrencies from "../../../assets/data/cryptocurrencies.json";
import CointItem from "../../components/CoinItem";
import { getMarketData } from "../../services/request";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchMarketData();
  }, []);
  const fetchMarketData = async (pageNumber) => {
    console.log(pageNumber);
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoin) => [...existingCoin, ...coinsData]);
    setLoading(false);
  };
  const refreshCoin = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };
  // if (loading) {
  //   return <ActivityIndicator />;
  // }
  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => (
        <>
          <CointItem marketCoin={item} />
        </>
      )}
      onEndReached={() => fetchMarketData(coins.length / 50 + 1)}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor='#fff'
          onRefresh={refreshCoin}
        />
      }
    />
  );
};

export default HomeScreen;
