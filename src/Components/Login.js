import React from "react";


const Login = () => {
 
  return (
    <>
      <div className="maincontainer">
        <div className="logincontainer">
        <div className="logo">
        <img src="https://smoothhiring.com/wp-content/uploads/2021/03/Smooth-hiring-logo-001-02.png" width="200" height="40" alt="logo"/>
          </div>
          <div className="SHlgnfrm">
          <div className="loginform">
            <div>
              <label for="email">Email </label>
              <div>
                
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div>
              <label for="email">password </label>
              <div>
              
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  autoComplete="off"
                  required                 
                />
              </div>
            </div>
            <div className="checkbox_rmbr">
              <div className="rmbrme"><input type="checkbox" id="checkbox" />
              <span className="rmbr">
                <label for="checkbox">Remember me</label>
              </span></div>
              <div className="frgtpswd"><a href="#">Forgot password?</a></div>
            </div>
          </div>
          <div className="LOGINBTN">
            <button className="loginbtn">
              Login now
            </button>
          </div><div className="accntcrt">
            <p>Dont have an Account?<span><a href="">Sign Up</a></span></p>
          </div>
          <div className="or">
            <span>OR</span>
          </div>
          <div className="cnct_p"><p>Or Connect Us with</p></div>
          <div className="social">
            <button className="googlebtn">
              <i class="fab fa-google"></i> Google
            </button>
            <button className="fbbtn">
              <i class="fab fa-facebook-square"></i> Facebook
            </button>
            <button className="lnkdnbtn">
              <i class="fab fa-linkedin"></i> Linkedin
            </button>
          </div>
          <div className="policy">
            <a href="#">Terms of use</a> | <a href="#">privacy Policy</a>
          </div>
          <div className="help">
            <a href="#">Need Help ?</a>
          </div>
          </div>
        </div>
        <div className="welcomecontainer">
          <div className="ellipse1"></div>
          <div className="ellipse3"></div>

          <div className="about">
            <div className="Welcome_sh">
              <h1>
                Welcome to<span> SmoothHiring </span>
              </h1>
            </div>
            <div className="Welcome_p">
              <p>
                Don't have an account? Create your account, it takes less than a
                minute
              </p>
            </div>
            <div className="crtaccbtn">
              <button className="accountbtn">
                Create My Account
              </button>
            </div>
            <div className="Brdcst_dot">
            <div className="broadcast">
              <div><i class="fas fa-check"></i> Broadcast to top job boards</div>
              <div><i class="fas fa-check"></i> Assess Applicants</div>
              <div><i class="fas fa-check"></i> Find the best fit</div>
              <div><i class="fas fa-check"></i> Automate hiring</div>
            </div>
            <div className="ellipse2"></div>
            <div className="dotcontainer">
              <div>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
              <div>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
              <div>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
              <div>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
              <div>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
              <div>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
              <div>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
              <div>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
              <div>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
              <div>
                <span className="dots"></span>
                <span className="dots"></span>
                <span className="dots"></span>
              </div>
            </div>
            </div>
            <div className="mail">
              <i class="fas fa-envelope"></i> help@
              <a href="https://www.smoothhiring.com">smoothhiring.com</a>
            </div>
            <div className="phone">
              <i class="fas fa-phone-alt"></i>1 (877) 789-8767
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;