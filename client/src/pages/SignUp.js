import React, { useContext } from 'react';
import SignUpForm from '../components/SignUpForm';
import {Redirect} from 'react-router-dom';
import UserContext from '../utils/UserContext';
import './SignUp.css';

function SignUp(props){
    const {loggedIn} = useContext(UserContext);
    return (
        <div className="container d-flex signUp-bg">
            <div className="mx-auto d-flex flex-column">
            {loggedIn && <Redirect to="/sign-up" />}
            <h1 className='text-center'>SignUp</h1>
            <SignUpForm className="full-page-signup" />
            </div>
        </div>
    )
}
export default SignUp;


