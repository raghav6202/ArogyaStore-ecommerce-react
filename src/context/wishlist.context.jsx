import { createContext, useContext, useReducer } from "react";

const ContextOfWishlist = createContext(null);

const wishlistReducerFn = (state, action) => {
  switch (action.payload) {
    case "add_to_wishlist":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload, wishes: 1 }]
      };

    case "remove_from_wishlist":
      return {
        ...state,
        wishlist: state.wishlist.filter((prod) => prod.id !== action.payload.id)
      };

    default:
      return state;
  }
};

const WishlistProvider = ({ children }) => {
  const initialValue = {
    wishlist: []
  };

  const { wishState, wishDispatch } = useReducer(
    wishlistReducerFn,
    initialValue
  );

  return (
    <ContextOfWishlist.Provider value={{ wishState, wishDispatch }}>
      {children}
    </ContextOfWishlist.Provider>
  );
};

const useWish = () => useContext(ContextOfWishlist);

export { WishlistProvider, useWish };
