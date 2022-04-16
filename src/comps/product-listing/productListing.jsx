import "./productListing.css";

import { useProduct } from "./../../context/products.context.jsx";

import { useFilter } from "../../context/filter.context.jsx";

const ProductListing = () => {
  const { itemList } = useProduct();

  const { state } = useFilter();

  const priceFilter = (products, priceSort) => {
    if (priceSort === "low_to_high") {
      return products.sort((a, b) => a.price - b.price);
    } else if (priceSort === "high_to_low") {
      return products.sort((a, b) => b.price - a.price);
    }

    return products;
  };

  const ratingFilter = (products, ratings) => {
    return products.filter((input) => input.rating >= ratings);
  };

  const categoryFilter = (products, categories) => {
    if (categories.length !== 0) {
      return products.filter((item) => categories.includes(item.categoryName));
    } else {
      return products;
    }
  };

  const productFilter = ratingFilter(
    categoryFilter(priceFilter([...itemList], state.priceSort), state.category),
    state.rating
  );

  return (
    <main className="product-display-container">
      <div className="product-display-component">
        <div className="product-grid">
          {productFilter.map(
            ({ title, seller, price, categoryName, image, rating }) => (
              <div className="ecomm vertical-card">
                <div className="vertical-card-image">
                  <img src={image} alt="card-pic" />
                </div>
                <div className="vertical-badge">{rating} ⭐</div>
                <button className="close-btn"> ❤️ </button>

                <div className="card-heading">{title}</div>
                <div className="card-text">Category:{categoryName}</div>
                <div className="card-text">Sold By:{seller}</div>
                <div className="card-price">₹.{price}</div>
                <button className="btn-cart btn">ADD TO CART</button>
              </div>
            )
          )}

          <div className="ecomm vertical-card">
            <div className="overlay-layer">
              <div className="vertical-card-image">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2021/6/MQ/SY/TI/21284661/syringe-with-needle-2ml-22g-23g-24g-500x500.jpg"
                  alt="card-pic"
                />
              </div>

              <div className="vertical-badge">OUT OF STOCK</div>
              <button className="close-btn">
                <i className="fi-xwluxl-heart-wide"></i>
              </button>

              <div className="card-heading">SYRINGE</div>
              <div className="card-text">Sold By:G.S.K</div>
              <div className="card-price">₹50</div>
              <button className=" btn" disabled>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { ProductListing };
