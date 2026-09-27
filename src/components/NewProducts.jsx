import { useProductList } from "@/context/ProductListContext";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { useNavigationHelpers } from "@/hooks/useNavigationHelpers";

import NewProductCard from "./NewProductCard";

export default function NewProducts() {
    const { getNewestProduct } = useProductList();

    const newest = getNewestProduct(5)

    const { goToProductInfo } = useNavigationHelpers();

    return (
        <View style={styels.newproductsWrapper}>
            <Text style={styels.newProductsTitle}> محصولات جدید 🌟 </Text>
            <FlatList
                style={{paddingVertical: 10}}
                data={newest}
                horizontal
                renderItem={({ item }) => <NewProductCard {...item} onPress={() => goToProductInfo(item.id)}/>}
                nestedScrollEnabled={true}
            />
        </View>
    )
}

const styels = StyleSheet.create({
    newproductsWrapper:
    {
        paddingVertical: 20
    },
    newProductsTitle:
    {
        fontSize: 20,
        color: "#222",
        marginHorizontal: 10,
        marginVertical: 15,
        fontFamily: "IRANSansX-Bold"
    }
})