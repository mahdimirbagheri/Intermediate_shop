import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useProductList } from "../context/ProductListContext";
import { useWishlist } from "../context/WishlistContext";
import WishlistItem from "./WishlistItem";

export default function Wishlist() {
  const { wishlist } = useWishlist();
  const { getProductById } = useProductList()
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const updated = wishlist.map((id) => getProductById(id));
    setWishlistProducts(updated);
  }, [wishlist]);
  
  return (
    <View style={styles.wishlistWrapper}>
        {
          wishlistProducts.length > 0 ? (
              wishlistProducts.map((product) => (
                <WishlistItem {...product} key={product.id} />
              )))
            :
            (
              <View style={styles.notFoundWrapper}>
                <Text style={styles.notFoundText}>
                  لیست مورد علاقه شما خالی است
                </Text>
              </View>
            )
        }
    </View>
  );
}

const styles = StyleSheet.create({
  wishlistWrapper:
  {
    flex: 1
  },
  notFoundWrapper:
  {
    flex: 1,
    justifyContent: "center",
  },
  notFoundText:
  {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "IRANSansX-Heavy",
  }
});
