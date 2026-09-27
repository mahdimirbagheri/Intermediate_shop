import { createContext, useContext, useState } from "react";
import { Categories } from "../constants/Categories";
import { ProductList } from "../constants/ProductList";
import { discountedProducts, filterProducts, findProductById, getNewProducts } from "../utils/filterProducts";

export const ProductListContext = createContext();

export function ProductListProvider({ children }) {
    const [allProduct] = useState(ProductList);
    const [categories] = useState(Categories)

    const getFilteredProducts = (key, limit, order) => {
        return filterProducts(allProduct, key, limit, order);
    }

    const getNewestProduct = (limit) => {
        return getNewProducts(allProduct, limit)
    }

    const getDiscountedProducts = (limit = null, order = "desc") => {
        return discountedProducts(allProduct, limit, order)
    }

    const getProductById = (id) => {
        return findProductById(allProduct, id);
    }
    
    return (
        <ProductListContext.Provider value={{ allProduct, categories,getFilteredProducts, getNewestProduct, getDiscountedProducts, getProductById }}>
            {children}
        </ProductListContext.Provider>
    )
}

export const useProductList = () => useContext(ProductListContext);