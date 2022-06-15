/** @format */

import React, { useEffect, useState } from "react";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { ActivityIndicator, Dimensions, Image, Text, View } from "react-native";
import coin from "../../../assets/data/crypto.json";
import CoinDetailHeader from "./CoinDetailHeader";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { LineChart, Grid } from "react-native-svg-charts";
import { useRoute } from "@react-navigation/native";
import { getCoinMarketChart, getDetailCoinData } from "../../services/request";
const CoinDetailScreen = () => {
  const [coinsData, setCoinsData] = useState(null);
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const {
  //   name,
  //   symbol,
  //   prices,
  //   image: { small },
  //   market_data: {
  //     market_cap_rank,
  //     current_price,
  //     price_change_percentage_24h,
  //   },
  // } = coinsData;
  const route = useRoute();
  const {
    params: { coinId },
  } = route;
  const fetchCoinData = async () => {
    setLoading(true);
    const coinData = await getDetailCoinData(coinId);
    const marketChartData = await getCoinMarketChart(coinId);
    setCoinsData(coinData);
    setMarketData(marketChartData);
    setLoading(false);
  };
  useEffect(() => {
    fetchCoinData();
  }, []);
  console.log(coinsData, "coin");
  console.log(marketData, "chart");
  if (loading || !coinsData || !marketData) {
    return <ActivityIndicator size={"large"} />;
  }
  const {
    name,
    symbol,
    image: { small },
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coinsData;
  const percentageColor = price_change_percentage_24h < 0 ? "red" : "green";
  const { prices } = marketData;
  console.log(coinId);
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailHeader
        symbol={symbol}
        image={small}
        marketCapRank={market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View
          style={{
            backgroundColor: percentageColor,
            paddingHorizontal: 5,
            paddingVertical: 8,
            borderRadius: 5,
            flexDirection: "row",
          }}>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={14}
            color={"#fff"}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.priceChange}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <LineChart
        style={{ height: 200 }}
        data={prices.map(([x, y]) => x)}
        svg={{ stroke: "rgb(134, 65, 244)" }}
        contentInset={{ top: 20, bottom: 20 }}>
        <Grid />
      </LineChart>
    </View>
  );
};
export default CoinDetailScreen;
