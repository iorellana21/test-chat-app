import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserContext from '../utils/UserContext'

import Login from './Login/Login'
import SignUp from './Signup/SignUp'
import Username from './Username/Username'

// import useLocalStorage from '../hooks/useLocalStorage'
// import Dashboard from './Dashboard/Dashboard'


export default function App() {

  // const [id, setId] = useLocalStorage('id')

  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // I think this gotta go in Login.js - getting id of user - can use this for our email, password, username
  // return (
  //   /* id ? : <Dashboard id={id} /> : <Login onIdSubmit={setId} />  
  // )

  return (
    <Router>
      <UserContext.Provider value={{ email, setEmail, loggedIn, setLoggedIn }}>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            
            <Route exact path="/username">
              <Username />
            </Route>

            <Route exact path="/signup">
              <SignUp />
            </Route>
            
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );

}
