import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CategoriesBox from "../../components/CategoriesBox";
import ProductList from "../../components/ProductList";

export default function ProductListScreen() {
    const [ currentCategories, setCurrentCategories ] = useState("همه");
    
    return (
        <SafeAreaView style={styles.screen}>
            <CategoriesBox current={currentCategories} onChange={setCurrentCategories} />

            <ProductList category={currentCategories} />
        </SafeAreaView>
    )
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
