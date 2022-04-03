import "./productPage.css"

import {useProduct, SideBar , ProductListing} from "./index.jsx"



// const ProductPage = () =>
// {

//   const { itemList} = useProduct()

//     return
//     (

//         <><div class="ecomm-sub-container">
//         <a class="ecom-sub-heading" href="./../index.html">
//           <span class="primary-color">Arogya</span><span class="secondary-color"> Products {itemList.length}</span>
//         </a>
//       </div><div class="listing-page">



        

//           <SideBar />

       
//           <ProductListing />
//         </div></>
//     );
// }


const ProductPage = () =>(<><div class="ecomm-sub-container">
  <a class="ecom-sub-heading" href="./../index.html">
    <span class="primary-color">Arogya</span><span class="secondary-color"> Products</span>
  </a>
</div><div class="listing-page">
    <SideBar />

    <ProductListing />
  </div></>
)



export {ProductPage}