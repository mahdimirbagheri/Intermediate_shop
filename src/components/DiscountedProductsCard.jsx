import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function DiscountedProductsCard({ id, name, image, discount, price, onPress }) {
  
    const discountedPrice = price - (price * discount) / 100;

    return (
    <Pressable style={({ pressed }) => [styles.DiscountedProductsCard, pressed && styles.cardPressed]} onPress={() => {if(onPress) return onPress(id)}}>

      
      <Image source={{ uri: image }} style={styles.DiscountedProductsCardImage} />
      
      <View style={styles.DiscountedProductsCardBadge}>
      
        <Text style={styles.DiscountedProductsCardBadgeText}>{discount}% تخفیف</Text>
      
      </View>
      
      <Text style={styles.DiscountedProductsCardTitle}>{name}</Text>
      
      <View style={styles.priceContainer}>
      
        <Text style={styles.oldPrice}>
      
            { new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr" }).format(price) }
      
            </Text>
      
        <Text style={styles.newPrice}>
      
            { new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr" }).format(discountedPrice) }
      
        </Text>
      
      </View>
    </Pressable>
    )
}

const styles = StyleSheet.create({
  DiscountedProductsCard:
  {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    paddingBottom: 10,
  },
  
  cardPressed:
  {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  DiscountedProductsCardImage:
  {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  DiscountedProductsCardBadge:
  {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF5C5C', 
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  
  DiscountedProductsCardBadgeText:
  {
    color: '#fff',
    fontSize: 12,
    fontFamily: "IRANSansX-Bold",
  },
  
  DiscountedProductsCardTitle:
  {
    marginTop: 8,
    fontSize: 14,
    fontFamily: "IRANSansX-Regular",
    paddingHorizontal: 8
  },
  
  priceContainer:
  {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 4,
  },

  oldPrice:
  {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 14,
    fontFamily: "IRANSansX-Medium"
  },

  newPrice:
  {
    color: 'green',
    fontSize: 14,
    fontFamily: "IRANSansX-Bold",
  },
});