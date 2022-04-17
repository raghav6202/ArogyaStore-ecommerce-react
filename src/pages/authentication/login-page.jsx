import "./authentication.css"
import { Link } from "react-router-dom";
const LogInPage = () =>
{


    return( <div class="login-page-conatiner">
    <div class="login-modal form-container component-display-container">
      <form action="" class="login-form">
        <div class="login-fields input-batch ecomm-sub-container">
          <a class="ecom-sub-heading">
            <span class="primary-color">LOG</span
            ><span class="secondary-color">-IN</span>
          </a>
        </div>

     

        <div class="login-fields input-batch">
          <label for="" class="label-text">Enter Your Email</label>
          <input type="email" placeholder="E-Mail" class="input-field" />
        </div>

        <div class="login-fields input-batch">
          <label for="" class="label-text">Enter Your password</label>
          <input type="password" placeholder="Password" class="input-field" />
        </div>

        <div class="login-fields input-batch">
          <button class="btn btn-login" type="submit">LOGIN</button>
        </div>

        <div class="login-fields input-batch">
          <small
            >Don't have an account?
            <strong>
            <Link  class="signup-link" to="/signup">SIGN UP</Link>
            </strong>
            
          </small>
        </div>

        <div class="login-fields input-batch">
          <small
            >Already logged in?
            <strong>
              <Link  class="signup-link" to="/">LOG OUT</Link>
              </strong>
            
          </small>
        </div>
      </form>
    </div>
  </div>





    )
}

export {LogInPage};