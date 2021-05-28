import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import OpenConversation from '../Conversations/OpenConversation'
import { useConversations } from '../contexts/ConversationsProvider'
import './dashboard.css'

export default function Dashboard({ username, id }) {

    const { selectedConversation } = useConversations()

    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <Sidebar username={username} id={id}/>
            {selectedConversation && <OpenConversation />}
        </div>
    )
}
