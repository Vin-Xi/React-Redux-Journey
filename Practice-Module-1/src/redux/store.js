import { configureStore } from '@reduxjs/toolkit'
import activeUserReducer from './Reducers/activeUserReducer';
import contactReducer from './Reducers/contactReducer';
import messageReducer from './Reducers/messageReducer';
import typingReducer from './Reducers/typingReducer';
import userReducer from './Reducers/userReducer';

export const store = configureStore({
  reducer: {
    contacts:contactReducer,
    users:userReducer,
    activeUser:activeUserReducer,
    messages:messageReducer,
    typing:typingReducer
  },
})