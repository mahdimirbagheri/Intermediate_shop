import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import DiscountedProducts from "../../components/DiscountedProducts";
import Header from "../../components/Header";
import NewProducts from "../../components/NewProducts";
import ProductSilder from "../../components/ProductSlider";
import TopRatedProducts from "../../components/TopRatedProducts";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />

      <FlatList
        data={[]} 
        ListHeaderComponent={
          <>
            <ProductSilder />
            <TopRatedProducts />  
            <NewProducts />
            <DiscountedProducts />
          </>
        }
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  screen:
  {
    flex: 1,
    padding: 10,
    direction: "rtl",
    backgroundColor: "#fff"
  }
});
