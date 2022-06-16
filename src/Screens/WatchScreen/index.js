/** @format */

import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { RefreshControl } from "react-native-web";
import CointItem from "../../components/CoinItem";
import { useWatchlist } from "../../Contexts/WatchlistContext";
import { getWatchlistedCoin } from "../../services/request";
const WatchScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const transformIds = () => watchlistCoinIds.join("%2C");
  console.log(transformIds(), "id");
  const fetchWatchlistCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const watchlistedCoinsData =
      (await getWatchlistedCoin(1, transformIds())) || [];
    // setCoins((existCoins) => [...existCoins, ...watchlistedCoinsData]);
    setCoins(watchlistedCoinsData);
    setLoading(false);
  };
  useEffect(() => {
    fetchWatchlistCoins();
  }, [watchlistCoinIds]);

  console.log(coins, "coin");
  return (
    <View>
      <Text>watch screen</Text>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CointItem marketCoin={item} />}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor={"#fff"}
            onRefresh={fetchWatchlistCoins}
          />
        }
      />
    </View>
  );
};

export default WatchScreen;
