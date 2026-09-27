import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

export default function Categories({ name, icon, active, onPress }) {
    return (
        <Pressable style={[styles.categories, active ? styles.active : styles.deActive]} onPress={() => { if(onPress) onPress(name) }}>
            <Text style={[styles.categoriesText, active && styles.activeText]}>
                {name}
            </Text>
            <Ionicons name={icon(active)} size={16} color={active ? "#fff" : "#000"}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    categories:
    {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 5,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    },
    deActive:
    {
        backgroundColor: "#f0f0f0",
    },
    active:
    {
        backgroundColor: "#007bff",
        borderColor: "#007bff",
    },
    activeText:
    {
        color: "#fff",
    },
    categoriesText:
    {
        fontSize: 16,
        fontFamily: "IRANSansX-Black",
        padding: 5
    }
})