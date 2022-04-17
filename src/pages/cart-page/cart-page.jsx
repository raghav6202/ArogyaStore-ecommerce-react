import "./cart-page.css"

import { useCart } from "../../context/cart.context"
import { CartInvoice } from "../../comps/cart-invoice/cart-invoice"
import { CartItems } from "../../comps/cart-items/cart-items"
const CartPage = () =>
{
const { cartState , cartDispatch} = useCart()

return(

    <div> 
    
    <div class="ecomm-sub-container">

        <a class="ecom-sub-heading" href="index.html"> <span class="primary-color">MY </span><span
                class="secondary-color">CART </span> </a>

    </div>
<CartItems />
<CartInvoice />
</div>
)

}

export {CartPage}