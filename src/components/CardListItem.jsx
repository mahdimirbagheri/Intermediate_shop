import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CardListItem({id, name, price, image, discount, count, onAdd, onRemove, onRemoveAll }) {
    return (
        <View style={styles.cartBox}>
            <View style={styles.cartBoxRight}>
                <View style={styles.cartBoxTitle}>
                    <Text style={styles.productTitle}>
                        {name}
                    </Text>
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
                            <Text style={styles.productPrice}>
                                { new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr" }).format(price)}
                            </Text>
                        )
                    }
                </View>
                <View style={styles.cartBoxAction}>
                    <Ionicons name="trash-outline" size={24} color={"#EF5350"} onPress={() => onRemoveAll({ id })}/>

                    <View style={styles.cartBoxActionLeft}>
                        <Ionicons name="add" 
                            size={18} style={styles.cartBoxActionIcon}
                            onPress={() => {onAdd({ id, name, price, image, discount })}}
                            />
                        <Text style={styles.cartboxCountText}>
                            {count}
                        </Text>
                        <Ionicons name="remove" 
                            size={18} style={styles.cartBoxActionIcon}
                            onPress={() => {onRemove({ id })}}
                            />
                    </View>
                </View>
            </View>
            <View>
                <Image source={{ uri: image }} resizeMode="contain" style={styles.productImage}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartBox:
    {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: "#E3F2FD",
        borderRadius: 10,
    },
    cartBoxRight:
    {
        flex: 1
    },
    cartBoxTitle:
    {
        alignItems: "center",
        paddingVertical: 10
    },
    cartBoxAction:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cartBoxActionLeft:
    {
        flexDirection: "row",
        gap: 15,
        marginLeft: 30,
    },
    cartboxCountText:
    {
        fontFamily: "IRANSansX-Regular",
    },
    cartBoxActionIcon:
    {
        color: "#42A5F5",
        backgroundColor: "#BBDEFB",
        padding: 2,
        borderRadius: 5,
    },
    productTitle:
    {
        fontSize: 16,
        fontFamily: "IRANSansX-Black",

    },
    productPrice:
    {
        fontFamily: "IRANSansX-Regular",
        fontSize: 14,
    },
    productImage:
    {
        width: 100,
        height: 100,
        borderRadius: 12,
    },
     productDiscountContainer:
    {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    productDiscountText:
    {
        fontSize: 14,
        fontFamily: "IRANSansX-Black",
        backgroundColor: "#ccc",
        paddingVertical: 2,
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
        textAlign: "center",
        textDecorationLine: 'line-through',
        color: '#999',
        fontSize: 12,
        fontFamily: "IRANSansX-Medium"
    },
    productNewPrice:
    {
        textAlign: "center",
        color: 'green',
        fontSize: 14,
        fontFamily: "IRANSansX-Bold",
    },
})
