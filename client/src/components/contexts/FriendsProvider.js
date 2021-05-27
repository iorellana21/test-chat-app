// import React, { useContext } from 'react'
// import useLocalStorage from '../../hooks/useLocalStorage'

// const FriendsContext = React.createContext()

// export function useFriends(){
//     return useContext(FriendsContext)
// }

// export function FriendsProvider({ children }) {

//     const [friends, setFriends] = useLocalStorage('friends', [])

//     function createFriend(id, name) {
//         setFriends(prevFriends => {
//             return [...prevFriends, { id, name }]
//         })
//     }

//     console.log("***", friends)
//     return (
//         <FriendsContext.Provider value={{ friends, createFriend }}>
//             {children}
//         </FriendsContext.Provider>
//     )
// }

import React, { useContext } from 'react'
import useFriendDBstorage from '../../hooks/useFriendDBstorage'

const FriendsContext = React.createContext()

export function useFriends() {
    return useContext(FriendsContext)
}

export function FriendsProvider({ children }) {

    const [friends, setFriends] = useFriendDBstorage('friends', [])

    function createFriend(friend) {
        // setFriends(prevFriends => {
        //     return [...prevFriends, { id, name }]
        // })
        console.log(friend);
        setFriends(friend)
    }

    console.log("friends and providers!", friends)
    return (
        <FriendsContext.Provider value={{ friends, createFriend }}>
            {children}
        </FriendsContext.Provider>
    )
}

