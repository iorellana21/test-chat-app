import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom";
// import { v4 as uuidV4 } from 'uuid'
import randomUsername from 'random-username-generator'

// import './login.css'

export default function Username({ onIdSubmit }) {

    const location = useLocation();

    var randomName = require('random-username-generator');
    // var new_username = rug.generate();

    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();

        onIdSubmit({ username: idRef.current.value })

    }

    function createNewId() {
        onIdSubmit({ username: randomName.generate()})
    }

    return (
        <Container className="align-items-center login-bg d-flex" style={{ height: '100vh' }}>
            <h2 style={{ color: "white" }}> Welcome to our Friend chat! (working title lol)</h2>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label style={{color:"white"}}>Enter a username</Form.Label>
                    <Form.Control type="text" ref={idRef} />
                </Form.Group>

                <Button type="submit">Create Username</Button>
                <Button onClick={createNewId} variant="secondary">Generate Username</Button>
            </Form>


        </Container>
    )
}
