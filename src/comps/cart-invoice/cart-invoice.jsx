import "./cart-invoice.css"
import { useCart } from "./../../context/cart.context";

const CartInvoice = () => {
  const { cartState, cartDispatch } = useCart();

  const cartquantity = cartState.cart.reduce(
    (accu, currVal) => accu + parseInt(currVal.quantity),
    0
  );

  const totalCartBill = cartState.cart.reduce(
    (accu, currVal) =>
      accu + parseInt(currVal.price) * parseInt(currVal.quantity),
    0
  );

  const discount = 0;

  const deliveryCharge = 0;

  const finalBill = totalCartBill - discount;

  return (
    <section className="total-price-container">
      <div className="total-price-details">
        <div className="total-price-title">
          <span className="primary-color">PRICE </span>
          <span className="secondary-color">DETAILS</span>
        </div>

        <div className="total-price-item ">
          {" "}
          <div>Total Items:</div> <div id="total-items">{cartquantity}</div>{" "}
        </div>

        <div className="total-price-item ">
          <div>Price:</div> <div id="total-price">₹ {totalCartBill}</div>{" "}
        </div>

        <div className="total-price-item ">
          <div>Delivery Charges:</div> <div id="delivery-price">Free!</div>{" "}
        </div>

        <div className="total-price-item ">
          <div>Discount:</div> <div id="discount-price">{discount}%</div>
        </div>

        <div className="total-price-item ">
          <div>Final Amount:</div>{" "}
          <div id="final-price">
            {" "}
            <strong>₹ {finalBill} </strong>{" "}
          </div>
        </div>

        <button className=" btn-cart btn">PLACE ORDER</button>
      </div>
    </section>
  );
};

export { CartInvoice };
