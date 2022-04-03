import "./productListing.css"


import { useProduct} from "./../../context/products.context.jsx"


const ProductListing = ()  => {

    const {itemList, setItemList} = useProduct()

    return (

 
    <main className="product-display-container">


        <div className="product-display-component">
            <div className="product-grid">
             

              

                { itemList.map( ({title , seller ,price,categoryName,image}) => 
                { 
                    return(
                        <div className="ecomm vertical-card">
                    <div className="vertical-card-image">
                        <img
                            src={image}
                            alt="card-pic" />
                    </div><div className="vertical-badge">NEW!</div><button className="close-btn">
                            <i className="fi-xwluxl-heart-wide"></i>
                        </button><div className="card-heading">{title}</div>
                        <div className="card-text">Sold By:{seller}</div>
                        <div className="card-price">₹.{price}</div>
                        <button className="btn-cart btn">ADD TO CART</button>
                        </div>
         
         )} )} 


    


                <div className="ecomm vertical-card">
                    <div className="overlay-layer">
                        <div className="vertical-card-image">
                            <img
                                src="https://5.imimg.com/data5/SELLER/Default/2021/6/MQ/SY/TI/21284661/syringe-with-needle-2ml-22g-23g-24g-500x500.jpg"
                                alt="card-pic" />
                        </div>

                        <div className="vertical-badge">OUT OF STOCK</div>
                        <button className="close-btn">
                            <i className="fi-xwluxl-heart-wide"></i>
                        </button>

                        <div className="card-heading">SYRINGE</div>
                        <div className="card-text">Sold By:G.S.K</div>
                        <div className="card-price">₹50</div>
                        <button className=" btn" disabled>ADD TO CART</button>
                    </div>

                </div>
            </div>
        </div>
    </main>
);

    }


export {ProductListing};