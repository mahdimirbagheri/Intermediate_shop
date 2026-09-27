import { ScrollView, StyleSheet } from "react-native";

import { useProductList } from '@/context/ProductListContext';
import ProductListItem from "./ProductListItem";

export default function ProductList({ category }) {
    const { allProduct } = useProductList();
    return (
        <ScrollView style={styles.productList}>
            {
                category != "همه"
                ?
                    allProduct.filter((product) => product.category == category).map((proudct) => <ProductListItem key={proudct.id} {...proudct}/>)
                :
                    allProduct.map((proudct) => <ProductListItem key={proudct.id} {...proudct}/>)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    productList:
    {
        marginVertical: 20,
        paddingHorizontal: 10,
    }
})