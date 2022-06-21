import React from "react";
import {useSelector} from 'react-redux';
import Header from '../components/Header'
import Chats from './Common/Chat'
import MessageInput from "./Common/MessageInput/MessageInput";
import "../styles/ChatWindow.css"
import _ from 'lodash'
import { getContacts, getMessages, getTyping } from "../redux/Selectors/selectors";

const ChatWindow = ({ activeUserId }) => {
  
  const contacts = useSelector(getContacts)
  const messages = useSelector(getMessages)
  const typing = useSelector (getTyping)
  
  const activeUser = contacts[activeUserId]
  const activeMsgs = messages[activeUserId]
  
    return (
    <div className="ChatWindow">
        <Header user={activeUser} />
        <Chats messages={_.values(activeMsgs)}/>
        <MessageInput value={typing}/>
    </div>
  );
};

export default ChatWindow;