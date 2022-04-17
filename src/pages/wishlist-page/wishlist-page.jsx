import "./wishlist-page.jsx"

const WishList = () =>
{

return(

    <section class="whishlist-container component-display-container">
    

    <div class="ecomm vertical-card shadow">
       <div class="vertical-card-image">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhu1DhL9buQ3taXnRJAZf-Xib0Z7MdbDQaQ&usqp=CAU" alt="card-pic" />
       </div>

       <div class="vertical-badge">
           OFFERS%
        </div>

       <button class="close-btn">
         <i class="fi-xwluxl-trash-wide"></i>
       </button>

       <div class="card-heading">
          DOLO 650mg
       </div>
       <div class="card-text">
           SOLD BY: S.K MEDICALS
       </div>
       <div class="card-price">
           Rs. 100
       </div>
       <button class="btn-cart btn">
           ADD TO CART
       </button>

   </div>


   <div class="ecomm vertical-card ">
       <div class="vertical-card-image">
           <img src="https://cdn.shopify.com/s/files/1/0052/6775/0984/products/2_14435c67-987a-4997-92b1-dbde119db858_700x.jpg?v=1594131884" alt="card-pic" />
       </div>

       <div class="vertical-badge">
          OFFERS%
       </div>

       <button class="close-btn">
         <i class="fi-xwluxl-trash-wide"></i>
       </button>

       <div class="card-heading">
         DIGITAL THERMOMETER
       </div>
       <div class="card-text">
   SOLD BY:MEDENGG TECHNOLOGIES
       </div>
       <div class="card-price">
           Rs. 100
       </div>
       <button class="btn-cart btn">
           ADD TO CART
       </button>

   </div>

</section>
)


}

export {WishList};