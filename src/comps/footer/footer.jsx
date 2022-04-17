import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () =>
{


    return( <footer className="ecom-footer footer-container">

    <div className="sub-caption">Developed with ❤️ By Raghav Chandra V S </div>

    <div className="footer-icons">


        <a href="https://github.com/raghav6202" className="small-icons"><BsGithub /></a>

        <a href="https://twitter.com/r_a___v" className="small-icons"><BsTwitter /></a>

        <a href="https://www.linkedin.com/in/raghav-chandra-vs-33575218b/" className="small-icons"><BsLinkedin /></a>


    </div>


</footer>


    )
}

export {Footer};