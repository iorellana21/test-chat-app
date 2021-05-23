import React from 'react'
import Login_2 from '../components/Login/Login_2'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard/Dashboard'
import { FriendsProvider } from './contexts/FriendsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




export default function App_2() {

    const [id, setId] = useLocalStorage('username')

    const dashboard = (
        <FriendsProvider>

            <ConversationsProvider id={id}>
                <Dashboard id={id} />
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

        id ? dashboard :
            <Router>
                <div>
                    {id ? dashboard : <Login_2 onIdSubmit={setId} />}
                    <Switch>
                        <Route exact path="/">
                            <Login_2 onIdSubmit={setId} />
                        </Route>
                    </Switch>
                </div>
            </Router>


    )
}
