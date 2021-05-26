import React from 'react'
import Login_2 from './Login/Login_2'

import SignUp from './Signup/SignUp'
import Username from './Username/Username'


// import useLocalStorage from '../hooks/useLocalStorage'
import useDBstorage from '../hooks/useDBstorage'

import Dashboard from './Dashboard/Dashboard'
import { FriendsProvider } from './contexts/FriendsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


export default function App() {

    const [value, saveUsername] = useDBstorage('username')
    console.log(value)

    const dashboard = (
        <FriendsProvider>

            <ConversationsProvider id={value._id}>
                <Dashboard username={value.username} id={value._id}/>
            </ConversationsProvider>

        </FriendsProvider>
    )

    return (
        // <Router>
        //  <div>
        //      {id ? dashboard : <Login_2 onIdSubmit={setId} />}
        //      <Switch>
        //         <Route exact path="/">
        //             <Login_2 onIdSubmit={setId}/>
        //         </Route>
        //     </Switch>
        //   </div>
        // </Router>

        value._id ? dashboard :
            <Router>
                <div>
                    {/* {id ? dashboard : <Login_2 onIdSubmit={setId} />} */}
                    <Switch>
                        <Route exact path="/">
                            <Username onIdSubmit={saveUsername} />
                        </Route>
                        {/* <Route exact path="/username">
                            <Username onIdSubmit={saveUsername}/>
                        </Route> */}
                        {/* <Route exact path="/signup">
                            <SignUp />
                        </Route> */}
                    </Switch>
                </div>
            </Router>

    )
}
