import { createContext, useContext, useState } from "react";


export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);


    const addToWishlist = (id) => {
        setWishlist((prev) => prev.includes(id) ? prev : [...prev, id])
    }

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((itemID) => itemID != id))
    }

    const isInWishlist = (id) => wishlist.includes(id);

    const clearWishlist = () => {
        setWishlist([])
    }

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, clearWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}


export const useWishlist = () => useContext(WishlistContext);