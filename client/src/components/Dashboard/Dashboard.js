import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import OpenConversation from '../Conversations/OpenConversation'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Dashboard({ username }) {

    const { selectedConversation } = useConversations()

    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <Sidebar username={username} />
            {selectedConversation && <OpenConversation />}
        </div>
    )
}
