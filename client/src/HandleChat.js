import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
<<<<<<< HEAD
const SOCKET_SERVER_URL = "http://localhost:4000";

const HandleChat = (id) => {

  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { id },
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
  }, [id]);
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };
  return { messages, sendMessage };
=======
const SOCKET_SERVER_URL = "http://localhost:3001";
const HandleChat = (roomId) => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();
    useEffect(() => {
        socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
            query: { roomId },
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
    }, [id]);
    const sendMessage = (messageBody) => {
        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
            body: messageBody,
            senderId: socketRef.current.id,
        });
    };
    return { messages, sendMessage };
>>>>>>> origin/main
};
export default HandleChat;