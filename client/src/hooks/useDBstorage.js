import { useEffect, useState } from 'react'

const PREFIX = 'chat-app-'

export default function useDBstorage(username, initialValue) {

    const [value, setValue] = useState({})

    async function saveUsername(username) {
        console.log(username)
        const request = await fetch(process.env.REACT_APP_FETCH_DOMAIN+'/api/user/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(username)
        }).then(data => data.json());
        // console.log(request);
        setValue(request)
    }

    // useEffect(() => {
    //     console.log(value)
    //     if (Object.keys(value).length > 0) {
    //         saveUsername(value);
    //     }
    // }, [value])

    console.log("username: " + username);
    console.log("value: " + value);

    return [value, saveUsername]
}
