import { useEffect, useState } from 'react'

const PREFIX = 'chat-app-'

export default function useFriendDBstorage(newFriend, initialValue) {

    const [value, setValue] = useState([])

    async function saveNewFriend(newFriend) {
        console.log(newFriend)
        const request = await fetch('http://localhost:3001/api/friend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFriend)
        }).then(data => data.json());
        // console.log(request);
        // setValue(request)
        setValue(prevFriends => {
            return [...prevFriends, request]
        })
    }

    // useEffect(() => {
    //     console.log(value)
    //     if (Object.keys(value).length > 0) {
    //         saveUsername(value);
    //     }
    // }, [value])

    console.log("newFriend: " + newFriend);
    console.log("value: " + value);

    return [value, saveNewFriend]
}
