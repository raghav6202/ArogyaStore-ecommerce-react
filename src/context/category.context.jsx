import { createContext, useContext, useEffect, useState } from "react";
const axios = require("axios").default;

const defaultValue = null;

const ContextOfCategories = createContext(defaultValue);

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
    <ContextOfCategories.Provider value={{ categoryList, setCategory }}>
      {children}
    </ContextOfCategories.Provider>
  );
};

// custom hook
const useCategory = () => useContext(ContextOfCategories);

export { useCategory, CategoryProvider };
