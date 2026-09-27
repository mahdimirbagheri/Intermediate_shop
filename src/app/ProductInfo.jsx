import { useProductList } from '@/context/ProductListContext';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCard } from "../context/CardContext";

import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProductInfoScreen() {
    const { id } = useLocalSearchParams();
    const { getProductById } = useProductList()

    const { addToCard } = useCard();

    const { name, description, price, image, discount, rating, brand, stock, colors, features } = getProductById(id);

    return (
        <SafeAreaView style={styles.screen}>
            <View style={{flex: 1}}>
                    <Image source={{ uri: image }} resizeMode="cover" style={styles.productImage} />
                    <Text style={styles.productTitle}>
                        {name}
                    </Text>
                    <Text style={styles.productDescription}>
                        {description}
                    </Text>
                    <View style={styles.productPriceContainer}>
                    {
                        discount ? 
                            (
                                <View style={styles.productDiscountContainer}>
                                    <Text style={styles.productDiscountText}>
                                        %{discount}
                                    </Text>
                                    <View>
                                        <Text style={styles.productOldPrice}>
                                            { new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr" }).format(price) }
                                        </Text>
                                        <Text style={styles.productNewPrice}>
                                            { new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr" }).format(price - (price * discount) / 100) }
                                        </Text>
                                    </View>
                                </View>
                            )
                            :
                            (
                                <View style={styles.productPriceBox}>
                                    <Text style={styles.productPrice}>
                                        قیمت کالا : 
                                    </Text>
                                    <Text style={styles.productPrice}>
                                        { new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr" }).format(price) }
                                    </Text>
                                </View>
                            )
                    }
                    </View>

                    <ScrollView style={styles.productInfoWrapper}>
                    <View style={styles.productInfoBox}>
                        <Text style={styles.productStockText}>
                            موجودی محصول : {stock}
                        </Text>
                        <Text style={styles.productRatingText}>
                            امتیاز : {rating} ⭐
                        </Text>
                    </View>
                    <Text style={styles.productBrandText}>
                        برند محصول : {brand}
                    </Text>
                    <View style={styles.productColor}>
                        <Text style={styles.productRatingText}>
                            رنگ موجود کالا :
                        </Text>
                        <View style={styles.productColorBox}>
                            {
                                colors.map(color => <View key={color} style={{ backgroundColor: color, ...styles.colorBox }}></View>)
                            }
                        </View>
                    </View>
                    <View style={styles.featuresWrapper}>
                        <Text style={styles.featuresTextTitle}> ویژگی های محصول :  </Text>
                        <View styl={styles.featureTextWrapper}>
                            {
                                features.map(feature => 
                                    <View style={styles.featuresTextBox} key={feature}>
                                        <Ionicons name="caret-back-outline" size={16}/>
                                        <Text key={feature} style={styles.featuresText}>{feature}</Text>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                    </ScrollView>
                </View>
            <Pressable style={styles.addToCard} onPress={() => addToCard({ id, name, price, image, discount })}>
                <Text style={styles.addToCardText}>
                    افزودن به سبد خرید
                </Text>
            </Pressable>
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
    },
    productImage:
    {
        width: "100%",
        height: 250,
        borderRadius: 20,
    },
    productTitle:
    {
        textAlign: "center",
        fontSize: 20,
        fontFamily: "IRANSansX-Black",
        marginVertical: 10,  
    },
    productDescription:
    {
        textAlign: "center",
        fontFamily: "IRANSansX-Regular",
        fontSize: 16
    },
    productPriceContainer:
    {
        margin: 10
    },
    productDiscountContainer:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    productDiscountText:
    {
        fontSize: 18,
        fontFamily: "IRANSansX-Black",
        backgroundColor: "#ccc",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15
    },
    productPriceBox:
    {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    productPrice:
    {
        fontSize: 14,
        fontFamily: "IRANSansX-Bold",
    },
    productOldPrice:
    {
        textDecorationLine: 'line-through',
        color: '#999',
        fontSize: 14,
        fontFamily: "IRANSansX-Medium"
    },

    productBrandText:
    {
        marginVertical: 8,
        fontFamily: "IRANSansX-Bold",
    },

    productNewPrice:
    {
        color: 'green',
        fontSize: 14,
        fontFamily: "IRANSansX-Bold",
    },
    productInfoWrapper:
    {
        marginVertical: 10,  
    },
    productInfoBox:
    {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    
    productRatingText:
    {
        marginVertical: 8,
        fontFamily: "IRANSansX-Bold",
    },
    
    productStockText:
    {
        fontFamily: "IRANSansX-Regular",
    },
    productColor:
    {
        flexDirection: "row",
        alignItems: "center"
    },
    productColorBox:
    {
        marginHorizontal: 10,
        flexDirection: "row",
        gap: 10
    },
    productColorBoxText:
    {
        fontFamily: "IRANSansX-Medium"
    },
    colorBox:
    {
        width: 20,
        height: 20,
        borderRadius: "100%",
    },
    featuresTextTitle:
    {
        fontFamily: "IRANSansX-Medium",
        fontSize: 18,
        marginBottom: 18,
    },
    featuresWrapper:
    {
        marginVertical: 10,
    },
    featureTextWrapper:
    {
        padding: 10
    },
    featuresTextBox:
    {
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5
    },
    featuresText:
    {
        fontFamily: "IRANSansX-Regular",
        fontSize: 16,
        paddingRight: 5
    },
    addToCard:
    {
        backgroundColor: "#000",
        borderRadius: 22,
    },
    addToCardText:
    {
        color: "#fff",
        textAlign: "center",
        fontFamily: "IRANSansX-Medium",
        fontSize: 18,
        paddingVertical: 15,
    }
});