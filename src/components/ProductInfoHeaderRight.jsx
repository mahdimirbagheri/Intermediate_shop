import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useWishlist } from "../context/WishlistContext";

export default function ProductInfoHeaderRight({ productID }) {
    const { isInWishlist, addToWishlist, removeFromWishlist }  = useWishlist();
    
    const [ liked, setLiked ] = useState(isInWishlist(productID))

    const likeProduct = () => {
        if(liked)
        {
            setLiked(false)
        }
        else
        {
            setLiked(true)
        }
    }

    useEffect(() => {
        liked ? addToWishlist(productID) : removeFromWishlist(productID);
    }, [liked])

    return (
        <TouchableOpacity>
            <Ionicons name={liked ? "heart" : "heart-outline"} size={24} color={"#C41E3A"} onPress={() => likeProduct()} />
        </TouchableOpacity>
    )
}