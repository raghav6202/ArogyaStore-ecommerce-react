const { createContext, useReducer, useContext } = require("react");

const ContextOfCart = createContext(null);

const cartReducerFn = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };

    case "increment":
      return {
        ...state,
        cart: state.cart.map((prod) =>
          prod.id === action.payload.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        )
      };

    case "decrement":
      return {
        ...state,
        cart: state.cart.map((prod) =>
          prod.id === action.payload.id
            ? {
                ...prod,
                quantity: prod.quantity > 1 ? prod.quantity - 1 : prod.quantity
              }
            : prod
        )
      };

    case "remove_from_cart":
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id)
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const initialValue = {
    cart:[ ]
  };

  const [cartState, cartDispatch] = useReducer(cartReducerFn, initialValue);

  return (
    <ContextOfCart.Provider value={{ cartState, cartDispatch }}>
      {children}
    </ContextOfCart.Provider>
  );
};

const useCart = () => useContext(ContextOfCart);

export { CartProvider, useCart };
