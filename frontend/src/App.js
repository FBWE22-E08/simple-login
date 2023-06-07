import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { UserList } from './components/UserList';
 
function App() {

  return (
    <div>
     <Login />
     <Register />
     <UserList />
 
    </div>
  );
}

export default App;
