# Project3
messaging app

## TO DO - from Peter
* modify FriendProvider to trigger a GET request for friends based on userID on page load - hint: useEffect

* put the conversation data into the DB
    * create new Conversation file in /models
    * save data along with userId and 1 friendId - no group chats right now
---
## Work done so far:
* Created pages 
    * Landing page (sign in or sign up)
    * Username page
    * sign up page
    * dashboard
* connected files to each other
* orient the divs to fit the page, css to follow in endgame
* Files needing editing: 
    * Client -> src -> -> components (loginform[index.js], signupform[index.js]) -> pages (dashboard, NewUser)
* npm install react-icons --save

# Team Work Done:

* loginform lines 60-70
* signupform lines 60-65

* dashboard lines 51-55
* newUser line 21

* DB connected to app
* DB working with original UI

* Added [client](original UI) folder {Malcolm}
* UI has been polished slightly (username page has been centered) and connected to DB {malcolm}
* We need to run 2 terminals. One for server(backend with [node/nodemon] server) and the other for UI (front end/react with [yarn_start]) {malcolm}
    * friends list now shows dummy data and is ready on back end, needs front end functionality

socket.io documentation
capture email instead of unique id
select multiple users to chat in group (checkbox)

* updated new file [HandleChat.js] in src folder, in client foler
    * exported into chatinput