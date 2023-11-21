import React, { useEffect } from "react";
import Styles from "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Login(props) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [emailError, setemailerror] = useState(false);
  let [passwordError, setpassworderror] = useState(false);
  let [showpassword, setShowPassowrd] = useState(false);

  let navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);    

  var togglePassword = () => {
    setShowPassowrd(!showpassword);
  };
  //checking intially weather the islogin is true of false
  useEffect(() => {
    if (isLoggedIn) {
      navigate("./accounts");
    } else {
      const localState = JSON.parse(localStorage.getItem("isLoggedIn"));
      if (localState === true) {
        props.setisLoggedIn(true);
        navigate("./accounts");
      } else {
        localStorage.setItem("isLoggedIn", JSON.stringify(false));
        props.setisLoggedIn(isLoggedIn);
      }
    }
  }, [isLoggedIn, navigate]);

  // handling the error messages
  var handleErrorMsg = () => {
    setemailerror(!emailError);
    setpassworderror(!passwordError);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      Signin();
    }
  };

  //handling the sigin in event
  var Signin = () => {
    if (!props.isLoggedIn) {
      if (username.trim() === "" || password.trim() === "") {
        // Both username and password are empty
        handleErrorMsg();
      } else if (password.length < 4 || password.length > 60) {
        // Password length is less than 4 or greater than 60
        setpassworderror(true);
      } else {
        // Valid credentials
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        props.setisLoggedIn(true); // Update the isLoggedIn state here
        navigate("./accounts");
      }
    }
  };
  

  return (
    <>
      <div className="background">
        <div className="loginmaincontainer">
          <div className="loginnav">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Netflix Logo"
            />
          </div>
          <div className="signinform">
            <div className="form">
              <h4>Sign In</h4>
              <div style={{ margin: "15px auto" }}>
                <input
                  className="username"
                  type="text"
                  placeholder="Email or phone number"
                  required
                  autoFocus
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                />
                {emailError && (
                  <p className="error">
                    Please enter a valid email address or phone number.
                  </p>
                )}
              </div>
              <div style={{ margin: "15px auto" }}>
                <input
                  className="username"
                  type={showpassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e)}
                />
                <span className="passwordeye" onClick={togglePassword}>
                  {showpassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </span>
                {passwordError && (
                  <p className="error">
                    Your password must contain between 4 and 60 characters.
                  </p>
                )}
              </div>
              <div>
                <button onClick={Signin} className="btnn">
                  Sign In
                </button>
                <div className="rememberme">
                  <div>
                    <input type="checkbox" />
                    Remember me
                  </div>
                  <a className="needhelp" href="#">
                    Need help ?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <h6>
                  New to netflix ?{" "}
                  <a className="signup" href="#">
                    Sign up now.
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

// https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_small.jpg
