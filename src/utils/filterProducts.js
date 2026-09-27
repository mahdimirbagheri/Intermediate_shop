/**
 * @param {Array} products 
 * @param {string} key 
 
*/

export const findProductById = (products, id) => {
  if(!products || products.length === 0) return [];
  
  return products.find(product => product.id === Number(id));
}


/**
 * @param {Array} products 
 * @param {string} key 
 * @param {number} limit 
 * @param {boolean} order
 * @returns {Array}
 */
export const filterProducts = (products, key, limit = null, order = "desc") => {    
    if(!products || products.length === 0) return [];

    if(!key) return limit ? products.slice(0, limit) : products;

    const filterd = products.filter((item) => item[key] !== undefined);
    
    const sorted = [...filterd].sort((a, b) => {
        if(typeof a[key] === "string") {
            return order === "asc"
                ? a[key].localeCompare(b[key])
                : b[key].localeCompare(a[key])
        }

        return order === "asc" ? a[key] - b[key] : b[key] - a[key];
    })

    

    return limit ? sorted.slice(0, limit) : sorted;
}

/**
 * @param {Array} products 
 * @param {number} limit 
 * @returns {Array}
 */
export const getNewProducts = (products, limit = null) => {
  const sortedByDate = [...products].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return limit ? sortedByDate.slice(0, limit) : sortedByDate;
};

/**
 * @param {Array} products 
 * @param {number} limit
 * @param {boolean} order
 * @returns {Array}
 */
export const discountedProducts = (products, limit = null, order = "desc") => {
  if (!products || products.length === 0) return [];

  const discounted = products.filter(
    (item) => item.discount && item.discount > 0
  );

  const sorted = [...discounted].sort((a, b) =>
    order === "asc" ? a.discount - b.discount : b.discount - a.discount
  );

  return limit ? sorted.slice(0, limit) : sorted;
};