import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Wishlist from "../../components/Wishlist";

export default function WishlistScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <Wishlist />
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
    }
})