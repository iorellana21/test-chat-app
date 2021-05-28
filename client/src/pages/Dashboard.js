import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../components/Searchbar';
import Friendlist from '../components/Friendlist';
import ChatInput from '../components/ChatInput';
import './dashboard.css';

export default function Dashboard() {
  const [friendList, setFriendList] = useState([]);


  useEffect(() => {
    async function getFriendList() {
      const request = await fetch('http://localhost:3001/api/friend').then(data => data.json());
      setFriendList(request);
      return true;
    }
    if (friendList.length <= 0) {
      getFriendList();
    }

  }, [])

  const location = useLocation();

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
