import { useEffect, useState } from 'react'

const PREFIX = 'chat-app-'

export default function GetUser(name, initialValue) {

    const [value, setValue] = useState({})

    async function getUserByName(name) {
        console.log(name)
        // const request = await fetch('http://localhost:3001/api/user/save', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }).then(data => data.json());
        // console.log(request);
        const request = await fetch(process.env.REACT_APP_FETCH_DOMAIN + `/api/user/user/${name}`).then(data => data.json());
        console.log(request);
        setValue(request)
    }

    // useEffect(() => {
    //     console.log(value)
    //     if (Object.keys(value).length > 0) {
    //         saveUsername(value);
    //     }
    // }, [value])

    console.log("id: " + name);
    console.log("value: " + value);

    return [value, getUserByName]
}
