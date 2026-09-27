import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigationHelpers } from "../hooks/useNavigationHelpers";

export default function ProductListItem({ id, name, price, rating, image, brand, stock, colors, discount }) {

    const { goToProductInfo } = useNavigationHelpers();

    return (
        <View style={styles.productListItemWrapper}>
            <View style={styles.productListItem}>
                <View style={styles.productListItemRight}>
                    <Text style={styles.productTitle}>
                        {name}
                    </Text>
                    <Text style={styles.productBrandText}>
                        برند : {brand}
                    </Text>
                    <Text style={[styles.productStockText, stock <= 5 && styles.lowRatingText ]}>
                        موجودی : { stock } { stock <= 5 && "🔥" }
                    </Text>
                    <View style={styles.productColorBox}>
                        <Text style={styles.productColorBoxText}> رنگ های موجود : </Text>
                        {
                            colors.map(color => <View key={color} style={{ backgroundColor: color, ...styles.colorBox }}></View>)
                        }
                    </View>
                    <View style={styles.productPriceContainer}>
                    {
                        discount ? 
                            (
                                <>
                                    <Text style={styles.productOldPrice}>
                                        { new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr" }).format(price) }
                                    </Text>
                                    <Text style={styles.productNewPrice}>
                                        { new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr" }).format(price - (price * discount) / 100) }
                                    </Text>
                                </>
                            )
                            :
                            (
                                <Text style={styles.productPrice}>
                                    { new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr" }).format(price) }
                                </Text>
                            )
                    }
                    </View>
                </View>
                <View style={styles.productListItemLeft}>
                    <Image source={{ uri: image }} resizeMode="cover" style={styles.productImage} />
                    <Text style={styles.productRate}>
                        {rating} ⭐
                    </Text>
                </View>
            </View>
            <Pressable style={styles.productButton} onPress={() => goToProductInfo(id)}>
                <Text style={styles.productButtonText}>
                    مشاهد محصول
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    productListItemWrapper:
    {
        padding: 10,
        marginVertical: 10,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5, 
    },
    productListItem:
    {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productListItemRight:
    {
        flex: 1
    },
    productTitle:
    {
        paddingLeft: 20,
        fontSize: 16,
        fontFamily: "IRANSansX-Medium"
    },
    productColorBox:
    {
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 5, 
    },
    productListItemLeft:
    {
        flexDirection: "column",
        height: "100%",
    },
    productImage:
    {
        borderRadius: 10,
        width: 100,
        height: 100,
    },
    productPriceContainer:
    {
        marginVertical: 10
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

    productNewPrice:
    {
        color: 'green',
        fontSize: 14,
        fontFamily: "IRANSansX-Bold",
    },
    productBrandText:
    {
        marginVertical: 8,
        fontFamily: "IRANSansX-Bold",
    },
    productStockText:
    {
        fontFamily: "IRANSansX-Regular",
    },
    lowRatingText:
    {
        fontFamily: "IRANSansX-Bold",
        color: "#FF6B6B"
    },
    productRate:
    {
        paddingVertical: 20,
        fontFamily: "IRANSansX-Bold",
        textAlign: "center"
    },
    productButton:
    {
        flex: 1,
        backgroundColor: "#007BFF",
        paddingVertical: 8,
        borderRadius: 12
    },
    productButtonText:
    {
        textAlign: "center",
        fontFamily: "IRANSansX-Black",
        color: "#fff"
    }
})