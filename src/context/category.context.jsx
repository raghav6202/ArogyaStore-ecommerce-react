import { createContext, useContext, useEffect, useState } from "react";
const axios = require("axios").default;



const defaultValue = null;

const contextOfCategories = createContext(defaultValue);

const CategoryProvider = ({ children }) => {
  const [categoryList, setCategory] = useState([]);

  useEffect(() => {
    const listOfCategory = async () => {
      try {
        const res = await axios.get("/api/categories");

        setCategory(res.data.categories);
        
      } catch (error) {
        console.error(error);
      }
    };

    listOfCategory();
  }, []);

  return (
    <contextOfCategories.Provider value={{ categoryList, setCategory }}>
      {children}
    </contextOfCategories.Provider>
  );
};

// custom hook
const useCategory = () => useContext(contextOfCategories);

export { useCategory, CategoryProvider };
