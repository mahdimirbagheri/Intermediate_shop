import { useProductList } from '@/context/ProductListContext';
import { useNavigationHelpers } from "@/hooks/useNavigationHelpers";
import { FlatList, StyleSheet, Text, View } from 'react-native';

import DiscountedProductsCard from "./DiscountedProductsCard";


export default function DiscountedProducts() {
    const { getDiscountedProducts } = useProductList();

    const discount = getDiscountedProducts()

    const { goToProductInfo } = useNavigationHelpers();

    return (
        <View>
            <Text style={styles.discountedProductsTitle}> محصولات تخفیف خورده 🎉</Text>
            <FlatList
                numColumns={2}
                columnWrapperStyle={styles.row}
                data={discount}
                renderItem={({ item }) => <DiscountedProductsCard {...item} onPress={() => goToProductInfo(item.id)}/>}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    discountedProductsTitle:
    {
        fontSize: 20,
        color: "#222",
        marginHorizontal: 10,
        marginVertical: 15,
        fontFamily: "IRANSansX-Bold"
    },
      row: {
    justifyContent: 'space-between', // فاصله بین دو ستون
    marginBottom: 15, // فاصله بین ردیف‌ها
  },
})