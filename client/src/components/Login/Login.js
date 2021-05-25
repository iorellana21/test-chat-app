import React, { Fragment, useContext, useRef, useState } from 'react';
// import LoginForm from './index';
// import { Redirect } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { Redirect, Link, useLocation } from "react-router-dom";

import { v4 as uuidV4 } from 'uuid'

import UserContext from '../../utils/UserContext';

import useLocalStorage from '../../hooks/useLocalStorage'
import Dashboard from '../Dashboard/Dashboard'


import "./login.css";


export default function Login({ onIdSubmit }) {

    const location = useLocation();

    const [id, setId] = useState()

    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        console.log("submit happened");
        // onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }

    return (

        <Container className="align-items-center d-flex login-bg" style={{ height: '100vh' }}>

            <Form>
                <div className="col-6 mx-auto my-auto">
                    <div className="p-2 mx-auto d-block text-center">
                        <h2>Welcome to the Friends/Connect App</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email </label>
                                <input type="email" className="form-control"/>
                                <small className="email-help-text form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label >Password</label>                                                    
                                <input type="password" className="form-control"/>
                            </div>
                            {/* <button type="submit" className="btn btn-primary w-100">Next</button> */}

                            <Link
                                to="/username"
                                className={
                                    location.pathname === "/username"
                                        ? "nav-link"
                                        : "nav-link text-black btn btn-primary my-3 w-100"
                                }>
                                    LOGIN
                            </Link>

                            <Link
                                to="/signup"
                                className={
                                    location.pathname === "/signup"
                                        ? "nav-link"
                                        : "nav-link text-black btn btn-light my-3 w-100"
                                }>
                                    SIGN UP
                            </Link>
                            {/* <button type="submit" className="btn btn-light my-3 w-100">Create an Account</button> */}
                        </form>
                    </div>
                </div>
            </Form>


        </Container>
    )
}