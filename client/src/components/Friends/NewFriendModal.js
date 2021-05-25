import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useFriends } from '../contexts/FriendsProvider'

export default function NewFriendModal({ closeModal }) {

    const idRef = useRef()
    const nameRef = useRef()
    const { createFriend } = useFriends()

    function handleSubmit(e) {
        e.preventDefault()

        createFriend(idRef.current.value, nameRef.current.value)
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Create Friend</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label style={{color: 'black'}}>Email</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{ color: 'black' }}>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>

                    <Button type="submit"> Create New Friend</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
