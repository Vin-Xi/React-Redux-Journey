import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import {useSelector} from 'react-redux';
import  _ from 'lodash';
import {getContacts,getUser,getActiveUser} from './redux/Selectors/selectors';
const App = () => {

const contacts = useSelector(getContacts)
const user = useSelector(getUser)
const activeUser = useSelector(getActiveUser)

console.log(activeUser);
  return (
  <div className='App'>
    <Sidebar contacts={_.values(contacts)}/>
    <Main user={user} activeUserId={activeUser} />
  </div>
  );
}

export default App;
