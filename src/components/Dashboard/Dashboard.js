import React from 'react'
import { useConversations } from '../contexts/ConversationsProvider'
import OpenConversation from '../Conversations/OpenConversation'
import Sidebar from '../Sidebar/Sidebar'

export default function Dashboard({ id }) {

    const { selectedConversation } = useConversations()

    return (
        <div className="d-flex" stye={{ height: '100vh' }}>
            <Sidebar id={id} />
            {selectedConversation && <OpenConversation />}
        </div>
    )
}
