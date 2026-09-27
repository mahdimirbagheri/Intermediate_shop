import { createContext, useContext, useState } from "react";

export const CardContext = createContext();

export function CardProvider({ children }) {
    const [ card, setCard ] = useState([]);

    const addToCard = (product) => {        
        setCard((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);

            return existingItem
                ? prev.map((item) =>
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                )
                : [...prev, { ...product, count: 1 }];
        });
    }

    const removeFromCard = (product) => {
        setCard((prev) =>
            prev
                .map((item) =>
                    item.id === product.id
                        ? { ...item, count: item.count - 1 }
                        : item
                )
                .filter((item) => item.count > 0)
        );
    }

    const removeAllFromCard = (product) => {
        setCard((prev) => prev.filter((item) => item.id != product.id))
    }

    const removeAll = () => setCard([]);

    return (
        <CardContext.Provider value={{ card, addToCard, removeFromCard, removeAllFromCard, removeAll }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCard = () => useContext(CardContext)