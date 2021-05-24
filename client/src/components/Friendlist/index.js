import React from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./index.scss";

const CONVERSATIONS_KEY = "conversations";
const FRIENDS_KEY = "friends";

export default function Friendlist({ list }) {
  console.log(list);

  //   const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  //     const conversationsOpen = activeKey === CONVERSATIONS_KEY;
  //     const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Nav variant="tabs" className="justify-content-center">
        <Nav.Item>
          <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={FRIENDS_KEY}>Friends</Nav.Link>
        </Nav.Item>
      </Nav>

      <ul>
        {list.map((friend) => <li key={friend._id}>{friend.name}</li>)}
      </ul>

      {/* <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal close={closeModal} />
        ) : (
          <NewFriendModal close={closeModal} />
        )}
      </Modal> */}

    </div>
  );
}
