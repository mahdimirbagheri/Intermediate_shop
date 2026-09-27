import { Pressable, StyleSheet, Text, View } from "react-native";
import { useCard } from "../context/CardContext";

export default function CardAction() {
    const { card } = useCard();
    return (
        <View style={styles.CardActionBox}>
            <View style={styles.CardActionPriceBox}>
                <Text style={styles.CardActionPrice}>مجموع کل :</Text>
                <Text style={styles.CardActionPrice}>
                    {
                        new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr" })
                            .format(
                                card.reduce((sum, item) => sum + (( item.discount ? item.price * (1 - item.discount / 100) : item.price ) * item.count), 0) 
                            )
                    }
                </Text>
            </View>
            <Pressable style={styles.CardActionButton}>
                <Text style={styles.CardActionButtonText}>
                    ثبت سفارش
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    CardActionBox:
    {

    },
    CardActionPriceBox:
    {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "center",
        gap: 10
    },
    CardActionPrice:
    {
        fontFamily: "IRANSansX-Regular",
    },
    CardActionButton:
    {
        borderRadius: 12,
        paddingVertical: 10,
        backgroundColor: "#42A5F5",
    },
    CardActionButtonText:
    {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "IRANSansX-Bold",
    }
})