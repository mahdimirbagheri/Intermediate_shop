import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useWishlist } from "../context/WishlistContext";
import { useNavigationHelpers } from "../hooks/useNavigationHelpers";

export default function WishlistItem({ id, name, image }) {
    const { removeFromWishlist } = useWishlist()

    const { goToProductInfo } = useNavigationHelpers();

    return (
        <View style={styles.wrapper}>
            <View style={styles.itemRow}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.buttonRow}>
                <Pressable style={[styles.button, styles.info]}>
                    <Text style={styles.buttonText} onPress={() => goToProductInfo(id)}>مشاهده محصول</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.delete]} onPress={() => removeFromWishlist(id)}>
                    <Text style={styles.buttonText}>حذف از لیست</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 12,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    itemRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 12,
        marginRight: 12,
    },
    title: {
        flex: 1,
        fontSize: 15,
        color: "#222",
        fontFamily: "IRANSansX-Bold",
        textAlign: "center",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        flex: 1,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        marginHorizontal: 4,
    },
    info: {
        backgroundColor: "#007BFF",
    },
    delete: {
        backgroundColor: "#FF6B6B",
    },
    buttonText: {
        color: "#fff",
        fontFamily: "IRANSansX-Regular",
        fontSize: 13,
    },
});