import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useFriends } from '../contexts/FriendsProvider'

export default function Friends() {

    const { friends } = useFriends()
    console.log("my side friends", friends)

    return (
        <ListGroup variant="flush">
            {friends.map(friend => (
                <ListGroup.Item key={friend._id}>
                    {friend.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
