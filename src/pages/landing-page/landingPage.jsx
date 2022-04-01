import "./landingPage.css";

import {useCategory} from "../../context/category.context";
<script defer src="https://friconix.com/cdn/friconix-0.2248.js"> </script>
const LandingPage = () =>
{

const { categoryList, setCategory } = useCategory()
console.log("category: " , categoryList)






return( 

 <>

 <nav class="nav-bar">

        <div class="nav-logo-name">
            <img class="ecom-logo" src="images\Health people abstract logo (1).png" alt="logo" />
            <a class="ecom-heading" href="index.html"> <span class="primary-color">Arogya</span><span
                class="secondary-color">Store</span> </a>
        </div>


        <div class="nav-search">
            <button type="submit" class="small-btn"><i class="fi-xnsuhl-search"></i></button>
            <input class="search-bar" type="search" placeholder="Search" value="" />
        </div>


        <div class="nav-components">

            <a href="./Authentication/login.html" class="nav-links active"><i class="fi-xnsuxl-user-solid"></i> Login</a>
            <a href="./Wishlist/wishlist.html" class="nav-links"><i class="fi-xnsuxl-heart-solid"></i> Whishlist</a>
            <a href="./cart/cart-page.html" class="nav-links"><i class="fi-xwsuhl-shopping-cart-solid"></i> Cart</a>


        </div>

    </nav><main class="ecomm-main">

            <div class="carousel-container">

                {/* <img class="carousel-img" src="https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="carousel" /> */}

                <div class="carousel-info">
                    <div class="carousel-heading">Celebrate Good Health with the ArogyaStore</div>
                    <div class="carousel-heading">FLAT 20% OFF USE CODE: MED20</div>
                    <a href="./listing-page/listing-page.html"> <button class="btn-carousel btn ">Shop Now ! <i class="fi-xnsrxl-chevron-solid"></i></button></a>
                </div>

            </div>
        </main><div class="ecomm-sub-container">

            <a class="ecom-sub-heading" href="index.html"> <span class="primary-color">Store </span><span
                class="secondary-color">Categories</span> </a></div>
                
                <div class="ecomm-categories">


            {categoryList.map( ({ categoryName,description,img}) => {

                return (


                    <div class="category-cards shadow">

                        <div class="category-img"><img class="horizontal-card-image"
                            src={img}
                            alt="category " />
                        </div>

                        <div class="category-info">

                            <div class="category-heading carousel-heading">{categoryName}</div>
                            <div class="card-text">
                                {description}
                            </div>
                            <div class="category-btn">
                                <a href="./listing-page/listing-page.html"><button class="btn-carousel btn "><i class="fi-xnsrxl-chevron-solid"></i></button></a>
                            </div>


                        </div>
                    </div>
                );
                })}

        </div>
        <footer class="ecom-footer footer-container">

            <div class="sub-caption">Developed with ❤️ By Raghav Chandra V S </div>

            <div class="footer-icons">


                <a href="https://github.com/raghav6202" class="small-icons"><i class="fi-xnsuxl-github"></i></a>

                <a href="https://twitter.com/r_a___v" class="small-icons"><i class="fi-xnsuxl-twitter-solid"></i></a>

                <a href="https://www.linkedin.com/in/raghav-chandra-vs-33575218b/" class="small-icons"><i
                    class="fi-xnsuxl-linkedin"></i></a>


            </div>


        </footer></>

        




            );
        };



            export {LandingPage};