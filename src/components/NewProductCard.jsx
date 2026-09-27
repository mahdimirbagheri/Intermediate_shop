import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function NewProductCard({ id, name, image , price, onPress }) {
    return (
        <Pressable
        style={({ pressed }) => [
            styles.newProductCardWrapper,
            pressed && styles.newProductCarPressed,
        ]}
        onPress={() => { if(onPress) onPress(id) }}
        >
            <Image source={{ uri: image }} style={styles.newProductCarImage} />
            <View style={styles.badge}>
                <Text style={styles.badgeText}>جدید</Text>
            </View>
            <Text style={styles.newProductCarName} ellipsizeMode="tail">{name}</Text>
            <Text style={styles.newProductCarPrice}>{ new Intl.NumberFormat("fa-IR", { style: "currency", currency: "irr"}).format(price) }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  newProductCardWrapper: 
  {
    width: 160,
    marginHorizontal: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, 
    paddingBottom: 10,
  },

  newProductCarPressed:
  {
    opacity: 0.8,
  },

  newProductCarImage:
  {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  newProductCarName:
  {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "IRANSansX-Regular",
    textAlign: "center",
    paddingHorizontal: 8
  },

  newProductCarPrice:
  {
    marginTop: 4,
    fontSize: 14,
    fontFamily: "IRANSansX-Bold",
    textAlign: "center",
    color: 'green',
    paddingHorizontal: 8
  },

  badge:
  {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },

  badgeText:
  {
    color: '#fff',
    fontSize: 12,
    fontFamily: "IRANSansX-Bold",
  },
});