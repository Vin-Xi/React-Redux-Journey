
const getContacts=(state)=>state.contacts.Listcontacts
const getUser = (state)=>state.users.ListUser
const getActiveUser = (state)=>state.activeUser.activeUserId
const getTyping = (state)=>state.typing.typingMessage
const getMessages = (state)=>state.messages.ListMessages

export {getContacts,getUser, getActiveUser,getTyping,getMessages}

