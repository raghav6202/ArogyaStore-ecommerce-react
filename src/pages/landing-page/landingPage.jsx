import "./landingPage.css";

import {useCategory} from "../../context/category.context";
import { FiArrowRight } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
const LandingPage = () =>
{

const { categoryList, setCategory } = useCategory()
console.log("category: " , categoryList)






return( 

 <>

 <main className="ecomm-main">

            <div className="carousel-container">

                {/* <img className="carousel-img" src="https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="carousel" /> */}

                <div className="carousel-info">
                    <div className="carousel-heading">Celebrate Good Health with the ArogyaStore</div>
                    <div className="carousel-heading">FLAT 20% OFF USE CODE: MED20</div>
                    <a href="./listing-page/listing-page.html"> <button className="btn-carousel btn ">Shop Now ! < FiArrowRight /></button></a>
                </div>

            </div>
        </main><div className="ecomm-sub-container">

            <a className="ecom-sub-heading" href="index.html"> <span className="primary-color">Store </span><span
                className="secondary-color">Categories</span> </a></div>
                
                <div className="ecomm-categories">


            {categoryList.map( ({ categoryName,description,img}) => {

                return (


                    <div className="category-cards shadow">

                        <div className="category-img"><img className="horizontal-card-image"
                            src={img}
                            alt="category " />
                        </div>

                        <div className="category-info">

                            <div className="category-heading carousel-heading">{categoryName}</div>
                            <div className="card-text">
                                {description}
                            </div>
                            <div className="category-btn">
                                <a href="./listing-page/listing-page.html"><button className="btn-carousel btn ">< FiChevronRight/></button></a>
                            </div>


                        </div>
                    </div>
                );
                })}

        </div>
        <footer className="ecom-footer footer-container">

            <div className="sub-caption">Developed with ❤️ By Raghav Chandra V S </div>

            <div className="footer-icons">


                <a href="https://github.com/raghav6202" className="small-icons"><i className="fi-xnsuxl-github"></i></a>

                <a href="https://twitter.com/r_a___v" className="small-icons"><i className="fi-xnsuxl-twitter-solid"></i></a>

                <a href="https://www.linkedin.com/in/raghav-chandra-vs-33575218b/" className="small-icons">Linkedin</a>


            </div>


        </footer></>

        




            );
        };



        export default LandingPage;