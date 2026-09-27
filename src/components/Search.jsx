import { useProductList } from '@/context/ProductListContext';
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import ProductCard from './ProductCard';

export default function Search() {
    const { allProduct } = useProductList();
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState([]);


    useEffect(() => {
        if(query.trim() !== "") {
            const filtered = allProduct.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );

            setFiltered(filtered);
        } else {
            setFiltered([])
        }
    }, [query])


    return (
        <View style={styles.searchWrapper}>
            <View style={styles.searchBox}>
                <Ionicons name="search-outline" size={24} style={styles.searchIcon} />
                <TextInput style={styles.searchInput} placeholder="جست‌وجو کالا" onChangeText={setQuery}/>
            </View>
            {
                query.trim() !== "" ?
                    <View style={styles.searchDropdown}>
                    {
                        filtered.length > 0 ?
                            (
                                    <FlatList 
                                        data={filtered}
                                        style={{maxHeight: 420}}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) => <ProductCard {...item} /> }
                                        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                                        />
                            )
                            :
                            (
                                <Text style={styles.notFoundProductText}>
                                    محصولی با این نام پیدا نشد
                                </Text>
                            )
                    }
                        </View>

                    :
                    null
                    
            }
        </View>
    )
}

const styles = StyleSheet.create({
    searchWrapper:
    {
        flex: 1,
        height: 50
    },
    searchBox:
    {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    searchIcon:
    {
        color: "#646670"
    },
    searchInput:
    {
        flex: 1,
        height: 40,
        fontFamily: "IRANSansX-Bold",
    },
    searchDropdown:
    {
        width: '100%',
        position: "absolute",
        top: 60, 
        right: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        zIndex: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    notFoundProductText:
    {
        padding: 10,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "IRANSansX-Bold",
    }
})