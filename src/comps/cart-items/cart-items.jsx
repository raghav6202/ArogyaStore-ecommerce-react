import "./cart-items.css";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useCart } from "./../../context/cart.context";

const CartItems = () => {
  const { cartState, cartDispatch } = useCart();

  return (
    <div className="cart-container component-display-container">
      {cartState.cart.map((cartInfo) => (
        <div className="ecomm vertical-card ">
          <div className="vertical-card-image">
            <img src={cartInfo.image} alt="card-pic" />
          </div>

          <div className="vertical-badge">VALUE</div>
          <button className="close-btn">
            <i className="fi-xwluxl-heart-wide"></i>
          </button>

          <div className="card-heading">{cartInfo.title}</div>
          <div className="card-text">{cartInfo.seller}</div>
          <div className="card-price">₹ {cartInfo.price}</div>

          <div className="cart-quantity">

            <button
              className="quantity-btn"
              onClick={() =>
                cartDispatch({ type: "decrement", payload: cartInfo })
              }
            >
                <span className="quantity-icon"><HiMinus /></span>
    
            </button>
            {cartInfo.quantity}
            <button
              className="quantity-btn"
              onClick={() => cartDispatch({ type: "increment", payload: cartInfo })}
            >
                <span className="quantity-icon"><HiPlus /></span>
            
            </button>
          </div>

          <button
            className="rmv-btn btn-cart btn"
            onClick={() =>
              cartDispatch({ type: "remove_from_cart", payload: cartInfo })
            }
          >
            REMOVE  <span className="quantity-icon"><BsTrash /></span>
            <i className="fi-xnsuxl-trash-solid"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export { CartItems };
