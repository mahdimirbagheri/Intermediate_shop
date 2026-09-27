import { Image, Pressable, StyleSheet, Text } from "react-native";
import { useNavigationHelpers } from "../hooks/useNavigationHelpers";

export default function ProductCard({ id, name, rating, image }) {
    const { goToProductInfo } = useNavigationHelpers();
    
    return (
        <Pressable style={styles.productCardWapper} onPress={() => goToProductInfo(id) }>
                <Image source={{ uri: image }} resizeMode="cover" style={styles.productCardImage} />
                <Text style={styles.productCardRating}>
                    {rating}⭐
                </Text>
                <Text style={styles.productCardTitle} numberOfLines={2} ellipsizeMode="tail">
                    {name}
                </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    productCardWapper:
    {
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5, 
        borderRadius: 12
    },
    productCardImage:
    {
        width: 90,
        height: 90,
        borderRadius: 15
    },
    productCardRating:
    {
        marginVertical: 10
    },
    productCardTitle:
    {
        width: 150,
        marginVertical: 5,
        fontFamily: "IRANSansX-Regular",
        textAlign: "center",
        fontSize: 12,
        flexWrap: "wrap"
    }
})