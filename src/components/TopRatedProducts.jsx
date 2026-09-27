import { useProductList } from "@/context/ProductListContext";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigationHelpers } from "../hooks/useNavigationHelpers";

import ProductCard from "../components/ProductCard";

export default function TopRatedProducts() {
    const { getFilteredProducts } = useProductList();

    const popular =  getFilteredProducts("rating", 5, "desc")
    
    const { goToProductInfo } = useNavigationHelpers();


    return (
        <View>
            <Text style={styles.topRatedProductsTitle}>
                محبوب ترین محصولات 🔥
            </Text>
            <FlatList 
                style={{paddingVertical: 10}}
                data={popular}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProductCard {...item} />}
                nestedScrollEnabled={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    topRatedProductsTitle:
    {
        fontSize: 20,
        color: "#222",
        marginHorizontal: 10,
        marginVertical: 15,
        fontFamily: "IRANSansX-Bold"
    }
    
})