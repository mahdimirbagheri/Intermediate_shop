import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";


export default function CartIcon({count = 0, size = 32}) {
    return (
        <View style={styles.iconBox}>
            <Ionicons name="cart-outline" size={32}/>
            {
                count > 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            {count > 9 ? "9+" : count}
                        </Text>
                    </View>
                )
            }
        </View>
    )
}


const styles = StyleSheet.create({
    iconBox:
    {
        position: "relative"
    },
    badge:
    {
        position: 'absolute',
        left: 25, 
        top: -4,   
        backgroundColor: '#F76C57', 
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontFamily: "IRANSansX-Black",
    },
})
