import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useFriends } from '../contexts/FriendsProvider'
import { useConversations } from '../contexts/ConversationsProvider'


export default function NewConversationModal({ closeModal }) {

    const [selectedFriendIds, setSelectedFriendIds] = useState([])

    const { friends } = useFriends();
    const { createConversation } = useConversations();

    function handleSubmit(event) {
        event.preventDefault()

        createConversation(selectedFriendIds)
        closeModal()
    }
    function closeModal(){
        return true;
    }
    function handleCheckboxChange(friendId) {
        setSelectedFriendIds(prevSelectedFriendIds => {
            if (prevSelectedFriendIds.includes(friendId)) {
                return prevSelectedFriendIds.filter(prevId => {
                    return friendId !== prevId
                })
            } else {
                return [...prevSelectedFriendIds, friendId]
            }
        })
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Create Conversation </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {friends.map(friend => (
                        <Form.Group controlId={friend.id} key={friend.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedFriendIds.includes(friend.id)}
                                label={friend.name}
                                onChange={() => handleCheckboxChange(friend.id)}
                            />
                        </Form.Group>
                    ))}

                    <Button type="submit"> Create New Conversation</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
