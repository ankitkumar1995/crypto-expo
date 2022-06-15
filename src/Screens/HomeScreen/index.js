/** @format */

import React from "react";
import { FlatList } from "react-native";
import cryptoCurrencies from "../../../assets/data/cryptocurrencies.json";
import CointItem from "../../components/CoinItem";
const HomeScreen = () => {
  return (
    <FlatList
      data={cryptoCurrencies}
      renderItem={({ item }) => (
        <>
          <CointItem marketCoin={item} />
        </>
      )}
    />
  );
};

export default HomeScreen;
