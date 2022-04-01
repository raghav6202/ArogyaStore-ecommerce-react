
import "./navigation.css"

const Nav = () =>
{

return(
<nav className="nav-bar">

        <div className="nav-logo-name">
            <img className="ecom-logo" src="images\Health people abstract logo (1).png" alt="logo" />
            <a className="ecom-heading" href="index.html"> <span className="primary-color">Arogya</span><span
                className="secondary-color">Store</span> </a>
        </div>


        <div className="nav-search">
            <button type="submit" className="small-btn"><i className="fi-xnsuhl-search"></i></button>
            <input className="search-bar" type="search" placeholder="Search" value="" />
        </div>


        <div className="nav-components">

            <a href="./Authentication/login.html" className="nav-links active"> Login</a>
            <a href="./Wishlist/wishlist.html" className="nav-links"><i className="fi-xnsuxl-heart-solid"></i> Whishlist</a>
            <a href="./cart/cart-page.html" className="nav-links"><i className="fi-xwsuhl-shopping-cart-solid"></i> Cart</a>


        </div>

    </nav>
)
}

export {Nav};