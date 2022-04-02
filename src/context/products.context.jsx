const { createContext, useState, useEffect, useContext } = require("react");

const defaultValue = null;
const axios = require("axios");
const ContextOfProducts = createContext(defaultValue);

const ProductProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);
  // initialized with array to store the items

  useEffect(() => {
    const obtainProductList = async () => {
      const res = await axios.get("/api/products");

      setItemList(res.data.products);
      console.log("use effect working");
    };
    obtainProductList();
  }, []);

  return (
    <ContextOfProducts.Provider value={{}}>
      {children}
    </ContextOfProducts.Provider>
  );
};

const useProduct = () => useContext(ContextOfProducts);

export { useProduct, ProductProvider };
