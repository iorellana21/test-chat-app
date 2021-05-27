import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Conversations from '../Conversations/Conversations'
import Friends from '../Friends/Friends'
import NewConversationModal from '../Conversations/NewConversationModal'
import NewFriendModal from '../Friends/NewFriendModal'

const CONVERSATIONS_KEY = 'conversations'
const FRIENDS_KEY = 'friends'


export default function Sidebar({ username, id }) {

    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY

    const [modalOpen, setModalOpen] = useState(false)

    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div style={{ width: '350px' }} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={FRIENDS_KEY}>Friends</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={FRIENDS_KEY}>
                        <Friends />
                    </Tab.Pane>
                </Tab.Content>

                <div className="p-2 border-top border-right small">
                    Your Username: <span className="text-muted">{username}</span>
                </div>

                <Button onClick={() => setModalOpen(true)} className="rounded-0">
                    New {conversationsOpen ? 'Conversation' : 'Friends'}
                </Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ?
                    <NewConversationModal closeModal={closeModal} /> :
                    <NewFriendModal closeModal={closeModal} id={id}/>
                }
            </Modal>


        </div>
    )
}
