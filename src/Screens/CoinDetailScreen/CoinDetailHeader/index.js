/** @format */

import React from "react";
import { Ionicons, EvilIcons, FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import coin from "../../../../assets/data/crypto.json";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useWatchlist } from "../../../Contexts/WatchlistContext";
const CoinDetailHeader = (props) => {
  const navigation = useNavigation();
  const { symbol, image, marketCapRank, coinId } = props;
  const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } =
    useWatchlist();
  console.log(coinId, watchlistCoinIds);
  const checkIfCOinIsWatchListed = () =>
    watchlistCoinIds.some((coinIdVal) => coinIdVal === coinId);

  console.log(checkIfCOinIsWatchListed());
  const handleWatchlistCoin = () => {
    if (checkIfCOinIsWatchListed()) {
      return removeWatchlistCoinId(coinId);
    }
    return storeWatchlistCoinId(coinId);
  };
  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name='chevron-back-sharp'
        size={33}
        color={"#fff"}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "#fff" }}>{marketCapRank}</Text>
        </View>
      </View>
      {/* <EvilIcons name='user' size={30} color='#fff' /> */}
      <FontAwesome
        name={checkIfCOinIsWatchListed() ? "star" : "star-o"}
        size={25}
        color={checkIfCOinIsWatchListed() ? "yellow" : "#fff"}
        onPress={handleWatchlistCoin}
      />
    </View>
  );
};
export default CoinDetailHeader;
