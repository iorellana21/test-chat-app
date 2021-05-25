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

        onIdSubmit(idRef.current.value)

    }

    function createNewId() {
        onIdSubmit(randomName.generate())
    }

    return (
        <Container className="align-items-center login-bg d-flex" style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className="w-100">

                <Form.Group>
                    <Form.Label>Enter a username</Form.Label>
                    <Form.Control type="text" ref={idRef} />
                </Form.Group>

                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewId} variant="secondary">Create Username</Button>
            </Form>


        </Container>
    )
}
