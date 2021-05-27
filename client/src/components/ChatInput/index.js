import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import HandleChat from '../../HandleChat';
import './index.scss';
export default function ChatInput() {

  const location = useLocation();
  const { messages, sendMessage } = HandleChat("current-room");
  const [newMessage, setNewMessage] = useState("");
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };
  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };
  
  console.log(messages);

  return (
    <div className="container">
      <div className="row">
        <div className="col msg-window-container">
          <div className="card" id="msgWindow">
            <div className="card-header">
              <Link to='/'>
                <FaHome className='float-right text-dark' />
              </Link>
            </div>
            <div className="card-body" id="msgs">
              {messages.map((message, i) => (
                <li
                  key={i}
                  className={`message-item text-dark ${message.ownedByCurrentUser ? "my-message" : "received-message"
                    }`}
                >
                  {message.body}
                </li>
              ))}
            </div>
            <div className="card-footer">
              <div className="input-group" id="msgForm" data-sender="me">
                <textarea
                  value={newMessage}
                  onChange={handleNewMessageChange}
                  placeholder="Write message..."
                  className="new-message-input-field"
                />
                <div className="input-group-append">
                  <button onClick={handleSendMessage} className="send-message-button">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};