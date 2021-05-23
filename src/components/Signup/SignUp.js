import React, { Fragment, useContext, useRef } from 'react';
// import SignUpForm from '../components/SignUpForm';
import { Redirect } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap'

import UserContext from '../../utils/UserContext';
import './SignUp.css';


// function SignUp(props) {

//     const { loggedIn } = useContext(UserContext);

//     return (
//         <div className="container d-flex signUp-bg">
//             <div>
//                 {loggedIn && <Redirect to="/sign-up" />}
//                 <h1 className='text-center'>SignUp</h1>
//                 <SignUpForm className="full-page-signup" />
//             </div>
//         </div>
//     )

// }

function SignUp(props) {

    // const { loggedIn } = useContext(UserContext);

    const { email, setEmail, loggedIn, setLoggedIn } = useContext(UserContext);

    const emailInput = useRef();
    const passwordInput = useRef();

    let extraProps = {}
    if (props.className) {
        extraProps.className = props.className;
    }
    let emailId = props.className ? props.className + "-signup-email" : "signup-email";
    let emailHelpId = props.className ? props.className + "-signup-email-help" : "signup-email-help";
    let passwordId = props.className ? props.className + "-signup-password" : "signup-password";
    const handleSubmit = event => {
        // if the user hits enter or hits the button, this function will fire
        event.preventDefault();
        // console.log("submit happened");
        // console.log({ email: emailInput.current.value, password: passwordInput.current.value});
        // API.testUserRouter()
        // .then(data => {
        //     console.log(data);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        // API.signup({ email: emailInput.current.value, password: passwordInput.current.value })
        //     .then(data => {
        //         // console.log(data);
        //         setEmail(data.data.email);
        //         setLoggedIn(true);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }
    const location = useLocation();



    return (

        // <div className="container d-flex signUp-bg">
        //      <div>
        //          {loggedIn && <Redirect to="/sign-up" />}
        //          <h1 className='text-center'>SignUp</h1>
        //          <SignUpForm className="full-page-signup" />
        //      </div>
        //  </div>

        <Container className="d-flex signUp-bg">
            <Fragment>

                {loggedIn && <Redirect to="/sign-up" />}
                <h1 className='text-center'>SignUp</h1>

                {(() => {
                    if (!loggedIn) {
                        return (

                            <form {...extraProps} onSubmit={handleSubmit}>

                                <div className="form-group">
                                    <label htmlFor={emailId}>Email address</label>
                                    <input ref={emailInput} type="email" className="form-control" id={emailId} aria-describedby={emailHelpId} />
                                    <small id={emailHelpId} className="email-help-text form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor={passwordId}>Password</label>
                                    <input ref={passwordInput} type="password" className="form-control" id={passwordId} />
                                </div>

                                <Link to='/username' className={
                                    location.pathname === 'username' ?
                                        'nav-link' :
                                        'nav-link text-black btn btn-primary my-3 w-100'}
                                >Sign Up!
                        </Link>

                                {/* <button type="submit" className="btn btn-primary">Sign Up</button> */}
                            </form>

                        );
                    }
                    else {
                        return <h3>{email}</h3>;
                    }
                })()
                }
            </Fragment>
        </Container>
    )
}


export default SignUp;