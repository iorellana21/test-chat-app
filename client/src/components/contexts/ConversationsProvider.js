import React, { useContext, useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useFriends } from './FriendsProvider'

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ id, children }) {

    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const { friends } = useFriends()

    function createConversation(recipients) {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }]
        })
    }

    function addMessageToConversation({ recipients, text, sender }) {
        setConversations(prevConversations => {
            let madeChange = false
            const newMessage = { sender, text }
            const newConversations = prevConversations.map(conversation => {
                if (arrayEquality(conversation.recipients, recipients)) {
                    madeChange = true;
                    return {
                        ...conversation,
                        messages: [...conversation.messages, newMessage]
                    }
                }
                return conversation
            })

            if (madeChange) {
                return newConversations
            } else {
                return [
                    ...prevConversations,
                    { recipients, messages: [newMessage] }]
            }
        })
    }

    function sendMessage(recipients, text) {
        addMessageToConversation({ recipients, text, sender: id })
    }

    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const friend = friends.find(friend => {
                return friend._id === recipient
            })
            const name = (friend && friend.name) || recipient
            return { id: recipient, name }
            // if (friends.length > 0) {
            //     const friend = friends.find(friend => {
            //         return friend.id === recipient;
            //     });
            //     const name = (friend && friend.name) || recipient
            //     return { id: recipient, name }
            // }
        })

        const messages = conversation.messages.map(message => {
            const friend = friends.find(friend => {
                return friend._id === message.sender
            })
            const name = (friend && friend.name) || message.sender
            const fromMe = id === message.sender
            return{...message, senderName: name, fromMe}
            // if (friends.length > 0) {
            //     const friend = friends.find(friend => {
            //         return friend.id === message.sender;
            //     });
            //     const name = (friend && friend.name) || message.sender;
            //     const fromMe = id === message.sender;
            //     return { ...message, senderName: name, fromMe }
            // }
        })

        const selected = index === selectedConversationIndex
        return { ...conversation, messages, recipients, selected }
    })

    const value = {
        conversations: formattedConversations,
        selectedConversation: formattedConversations[selectedConversationIndex],
        sendMessage,
        selectConversationIndex: setSelectedConversationIndex,
        createConversation
    }

    return (
        <ConversationsContext.Provider value={value}>
            { children}
        </ConversationsContext.Provider >
    )
}

function arrayEquality(a, b) {
    if (a.length !== b.length) return false

    a.sort()
    b.sort()

    return a.every((element, index) => {
        return element === b[index]
    })
}