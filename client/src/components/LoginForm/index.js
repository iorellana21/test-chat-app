import React, { Fragment, useContext, useRef } from "react";
// import "./style.scss";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function LoginForm(props) {
  const { email, setEmail, loggedIn, setLoggedIn } = useContext(UserContext);
  const history = useHistory();
  const emailInput = useRef();
  const passwordInput = useRef();
  const location = useLocation();

  let extraProps = {};
  if (props.className) {
    extraProps.className = props.className;
  }
  let emailId = props.className
    ? props.className + "-login-email"
    : "login-email";
  let emailHelpId = props.className
    ? props.className + "-login-email-help"
    : "login-email-help";
  let passwordId = props.className
    ? props.className + "-login-password"
    : "login-password";
  const handleSubmit = (event) => {
    // if the user hits enter or hits the button, this function will fire
    event.preventDefault();
    // console.log("submit happened");
    // console.log({ email: emailInput.current.value, password: passwordInput.current.value});
    API.login({
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })
      .then((data) => {
        // console.log(data);
        setEmail(data.data.email);
        setLoggedIn(true);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      {(() => {
        if (!loggedIn) {
          return (
            <div className="row align-items-center h-100 d-flex">
              <div className="col-6 mx-auto my-auto">
                <div className="p-2 mx-auto d-block text-center">
                  <h2>Welcome to the Friends/Connect App</h2>
                  <form {...extraProps} onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor={emailId}>Sign in </label>
                      <input
                        ref={emailInput}
                        type="email"
                        className="form-control"
                        id={emailId}
                        aria-describedby={emailHelpId}
                      />
                      <small
                        id={emailHelpId}
                        className="email-help-text form-text text-muted"
                      >
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor={passwordId}>Password</label>
                      <input
                        ref={passwordInput}
                        type="password"
                        className="form-control"
                        id={passwordId}
                      />
                    </div>
                    {/* <button type="submit" className="btn btn-primary w-100">Next</button> */}

                    <Link
                      to="/new-user"
                      className={
                        location.pathname === "/new-user"
                          ? "nav-link"
                          : "nav-link text-black btn btn-primary my-3 w-100"
                      }
                    >
                      Next
                    </Link>

                    <Link
                      to="/signup"
                      className={
                        location.pathname === "/signup"
                          ? "nav-link"
                          : "nav-link text-black btn btn-light my-3 w-100"
                      }
                    >
                      Create an Account
                    </Link>

                    {/* <button type="submit" className="btn btn-light my-3 w-100">Create an Account</button> */}
                  </form>
                </div>
              </div>
            </div>
          );
        } else {
          return <h3>{email}</h3>;
        }
      })()}
    </Fragment>
  );
}

export default LoginForm;
