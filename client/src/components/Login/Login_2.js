import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom";
// import { v4 as uuidV4 } from 'uuid'
import randomUsername from 'random-username-generator'

// import './login.css'

export default function Login({ onIdSubmit }) {

    const location = useLocation();

    var randomName = require('random-username-generator');
    // var new_username = rug.generate();

    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();

        onIdSubmit(idRef.current.value)

    }

    function createNewId() {
        onIdSubmit(randomName.generate())
    }

    return (
        <Container className="align-items-center login-bg d-flex" style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className="w-100">

                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} />
                </Form.Group>

                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewId} variant="secondary">Create Username</Button>
            </Form>

            {/* OUR STUFF */}
            <div className="col-6 mx-auto my-auto">
                <div className="p-2 mx-auto d-block text-center">

                    {/* TITLE */}
                    <h2>Welcome to the Friends/Connect App</h2>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit}>
                        {/* EMAIL */}
                        <div className="form-group">
                            <label>Email </label>
                            <input type="email" className="form-control" />
                            <small className="email-help-text form-text text-muted">
                                We'll never share your email with anyone else.
                                </small>
                        </div>

                        {/* PASSWORD */}
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" />
                        </div>

                        {/* USERNAME PAGE */}
                        <Link
                            to="/username"
                            className={
                                location.pathname === "/username"
                                    ? "nav-link"
                                    : "nav-link text-black btn btn-primary my-3 w-100"
                            }>
                            LOGIN
                        </Link>

                        {/* SIGNUP PAGE */}
                        <Link
                            to="/signup"
                            className={
                                location.pathname === "/signup"
                                    ? "nav-link"
                                    : "nav-link text-black btn btn-light my-3 w-100"
                            }>
                            SIGN UP
                        </Link>


                    </form>
                </div>
            </div>


            
        </Container>
    )
}
