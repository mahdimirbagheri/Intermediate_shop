import { useProductList } from '@/context/ProductListContext';
import { FlatList, StyleSheet, View } from "react-native";

import Categories from "./Categories";

export default function CategoriesBox({ current, onChange }) {
    const { categories } = useProductList();

    const onChangeCategories = (name) => {
        if(current == name)
        {
            onChange("همه")
        }
        else
        {
            onChange(name);
        }
    }

    return (
        <View style={styles.categoriesBox}>
            <FlatList 
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Categories key={item.name} {...item} active={current == item.name} onPress={onChangeCategories} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    categoriesBox:
    {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center"
    }
})