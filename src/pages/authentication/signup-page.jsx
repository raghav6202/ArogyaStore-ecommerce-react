import "./authentication.css"
import { Link } from "react-router-dom";
const SignUpPage = () =>

{

    return(<div class="login-page-conatiner">
    <div class="login-modal form-container component-display-container">
      <form action="" class="login-form">
        <div class="login-fields input-batch ecomm-sub-container">
          <a class="ecom-sub-heading">
            <span class="primary-color">SIGN</span
            ><span class="secondary-color">-UP</span>
          </a>
        </div>

        <div class="input-batch">
          <label for="" class="label-text"> Enter Your Name</label>
          <div class="name-field">
            <input type="text" placeholder="First Name" class="input-field" />
            <input type="text" placeholder="Last Name" class="input-field" />
          </div>
        </div>

        <div class="login-fields input-batch">
          <label for="" class="label-text">Date Of Brith</label>
          <input type="date" class="input-field" />
        </div>

        <div class="login-fields input-batch">
          <label for="" class="label-text">Gender</label>
          <select name="Gender" class="input-field">
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="trans">Transgender</option>
            <option value="nothing">Rather Not Say</option>
          </select>
        </div>

        <div class="login-fields input-batch">
          <label for="" class="label-text">Enter Your Email</label>
          <input type="email" placeholder="E-Mail" class="input-field" />
        </div>

        <div class="login-fields input-batch">
          <label for="" class="label-text">Set Your password</label>
          <input type="password" placeholder="Password" class="input-field" />
        </div>

        <div class="login-fields input-batch">
          <button class="btn btn-login" type="submit">SIGNUP</button>
        </div>

        <div class="login-fields input-batch">
          <small
            >Already have an account?<strong
              >  <Link  class="signup-link" to="/login">LOG IN</Link></strong >
           
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

export {SignUpPage};