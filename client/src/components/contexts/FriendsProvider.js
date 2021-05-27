import React, { useContext } from 'react'
import useFriendDBstorage from '../../hooks/useFriendDBstorage'

const FriendsContext = React.createContext()

export function useFriends() {
    return useContext(FriendsContext)
}

export function FriendsProvider({ children }) {

    const [friends, setFriends, getFriends] = useFriendDBstorage('friends', [])

    function createFriend(friend) {
        console.log(friend);
        setFriends(friend)
    }

    // async function getFriends(username) {
    //     const url = `http://localhost:3001/api/user/get-friends/${username.username}`;
    //     const request = await fetch(url).then(data => data.json());
    //     setFriends(request);
    //     console.log(request);
    // }

    console.log("friends and providers!", friends)
    return (
        <FriendsContext.Provider value={{ friends, createFriend, getFriends }}>
            {children}
        </FriendsContext.Provider>
    )

}

