
import React, { useState, useEffect, useRef} from "react";
import { Link, useLocation } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import SearchBar from '../components/Searchbar';
import Friendlist from '../components/Friendlist';
import ChatInput from '../components/ChatInput';
import './dashboard.css';
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "http://localhost:4000";



/**
  * step 2 use useEffect to set state with that friends array when the component loads
 * step 3 pass the state as a prop to friend list component
 * step 4 use .map to loop throught the friends state array as a list 
 * 
 */



export default function Dashboard() {
  const [friendList, setFriendList] = useState([]);
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();
  
  useEffect(()=> {
    async function getFriendList() {
      const request = await fetch('http://localhost:3001/api/friend').then(data => data.json());
      setFriendList(request);
      return true; 
    }
    if (friendList.length <= 0) {
      getFriendList();
    }

    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { id:1 },
    });
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });
    return () => {
      socketRef.current.disconnect();
    };


  }, [])
  const location = useLocation();
  
  console.log(friendList);

  return (
    <div className="container dashboard-bg">
    <div className="row">
        <div className='col-sm-12 col-md-4 mr-0 pr-0 pl-3'>
            <SearchBar />
            <Friendlist list={friendList} />
        </div>
        <div className='col-sm-12 col-md-8 ml-0 pl-0'>
        <ChatInput /> 
        </div>
    </div>
    
    </div>
  );
}
