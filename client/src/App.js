import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./utils/UserContext";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import Logout from "./pages/Logout";
import NewUser from "./pages/NewUser";
import Dashboard from "./pages/Dashboard";




function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <UserContext.Provider value={{email, setEmail, loggedIn, setLoggedIn}}>
        <div>
          {/* <Nav /> */}
          <Switch>
                   
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/new-user">
              <NewUser />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            {/* <Route exact path="/logout">
              <Logout />
            </Route> */}
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
