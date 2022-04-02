import "./productPage.css"

import {useProduct, SideBar , ProductListing} from "./index.js"



const ProductPage = () =>
{

  const { itemList} = useProduct()

    return
    (

        <><div class="ecomm-sub-container">
        <a class="ecom-sub-heading" href="./../index.html">
          <span class="primary-color">Arogya</span><span class="secondary-color"> Products {itemList.length}</span>
        </a>
      </div><div class="listing-page">



          {/* side-bar-starts */}

          <SideBar />

          {/* <!-- -----side-bar-ends------------ -->

    <!-- -----main-bar-starts------------ --> */}
          <ProductListing />
        </div></>
    );
}

export {ProductPage}