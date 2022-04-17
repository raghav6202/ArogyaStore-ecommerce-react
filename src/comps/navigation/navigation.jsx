
import "./navigation.css";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillSuitHeartFill,BsSearch } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";

const Nav = () =>
{

return(
<nav className="nav-bar">

        <div className="nav-logo-name">
            <img className="ecom-logo" src="images/arogyaLogo.png" alt="logo" />
            <Link className="ecom-heading" to="/"> <span className="primary-color">Arogya</span><span
                className="secondary-color">Store</span>  </Link>
        </div>


        <div className="nav-search">
            <button type="submit" className="small-btn"><BsSearch /></button>
            <input className="search-bar" type="search" placeholder="Search" value="" />
        </div>


        <div className="nav-components">
<Link className="nav-links active" to="/login" > <BsPeopleFill />  Login </Link>
<Link className="nav-links active" to="/wishlist" > <BsFillSuitHeartFill />  Whishlist</Link>
<Link className="nav-links active" to="/cart" > <BsFillCartFill />  Cart  </Link>     
          

        </div>

    </nav>
)
}

export {Nav};