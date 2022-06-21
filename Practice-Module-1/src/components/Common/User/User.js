import React from "react";
import "../../../styles/User.css";
import {useDispatch} from 'react-redux';
import {setUserActiveId} from '../../../redux/Reducers/activeUserReducer'

const User = ({ user }) => {
    const { name, status } = user;
    const dispatch = useDispatch()

  return (
    <div className="User" onClick={()=>dispatch(setUserActiveId(user.user_id))}>
      {/* <img src={profile_pic} alt={name} className="User__pic" /> */}
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;