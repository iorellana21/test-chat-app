import React, {useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useFriends } from '../contexts/FriendsProvider'

export default function Friends(username) {

    // const [ friendList, setFriendList ] = useState([]);
    const { friends, getFriends } = useFriends()

    useEffect(() => {
         async function executeGetFriendFetch() {
            await getFriends(username); 
         }
         if(friends.length <= 0) {
            console.log("hello??");
           executeGetFriendFetch(); 
        }
     }, [])
     console.log(friends);

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
