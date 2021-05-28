import { useEffect, useState } from 'react'

const PREFIX = 'chat-app-'

export default function useFriendDBstorage(newFriend, initialValue) {

    const [value, setValue] = useState([])

    async function saveNewFriend(newFriend) {

        console.log(newFriend)
        const request = await fetch(process.env.REACT_APP_FETCH_DOMAIN + '/api/friend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFriend)
        }).then(data => data.json());
       
        setValue(prevFriends => {
            return [...prevFriends, request]
        })
    }

    async function getFriends(username) {
        const url = process.env.REACT_APP_FETCH_DOMAIN + `/api/user/get-friends/${username.username}`;
        const request = await fetch(url).then(data => data.json());
        setValue(request);
        console.log(request);
    }

    console.log("newFriend: " + newFriend);
    console.log("value: " + value);

    return [value, saveNewFriend, getFriends]
}
