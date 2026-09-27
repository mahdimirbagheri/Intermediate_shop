import { useCard } from "@/context/CardContext";
import { StyleSheet, View } from "react-native";
import CartIcon from "./CartIcon";
import Search from "./Search";

export default function Header() {
    const { card } = useCard();
    return (
        <View style={styles.header}>
            <Search />

            <CartIcon count={card.length}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header:
    {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    }
})