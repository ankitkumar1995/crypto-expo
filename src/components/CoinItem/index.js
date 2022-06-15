/** @format */
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
export default function CointItem({ marketCoin }) {
  const navigation = useNavigation();
  const {
    id,
    name,
    current_price,
    market_cap_rank,
    symbol,
    image,
    market_cap,
    price_change_percentage_24h,
  } = marketCoin;
  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1000000000000) {
      return `${Math.floor(marketCap / 1000000000000)} T`;
    }
    if (marketCap > 1000000000) {
      return `${Math.floor(marketCap / 1000000000)} B`;
    }
    if (marketCap > 1000000) {
      return `${Math.floor(marketCap / 1000000)} M`;
    }
    if (marketCap > 1000) {
      return `${Math.floor(marketCap / 1000)} K`;
    }
    return marketCap;
  };
  const percentageColor = price_change_percentage_24h < 0 ? "red" : "green";
  return (
    <Pressable
      style={styles.coinContainer}
      onPress={() => navigation.navigate("CoinDetailScreen", { coinId: id })}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 35,
          height: 35,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContaine}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={14}
            color={percentageColor}
            style={{ alignSelf: "center" }}
          />
          <Text style={{ color: percentageColor, fontWeight: "bold" }}>
            {price_change_percentage_24h.toFixed(2)} %
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{ color: "#fff" }}>
          MCap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </Pressable>
  );
}
