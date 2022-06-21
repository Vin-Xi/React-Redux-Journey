import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../../../styles/messageInput.css";
import { setTypingMessage } from "../../../redux/Reducers/typingReducer";
import { send_message } from "../../../redux/Reducers/messageReducer";
import { send_message1 } from "../../../redux/Reducers/typingReducer"
import { getActiveUser, getTyping } from "../../../redux/Selectors/selectors";
const MessageInput = ({ value }) => {

    const dispatch = useDispatch()
    const activeUser = useSelector(getActiveUser)
    const typing = useSelector (getTyping)
    
  return (
    <form className="Message" onSubmit = {(e)=>{

        e.preventDefault();
        dispatch(send_message({typing,activeUser}))
        dispatch(send_message1())

    }}>
      <input
        className="Message__input"
        onChange={(e)=>dispatch(setTypingMessage(e.target.value))}
        value={typing}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;