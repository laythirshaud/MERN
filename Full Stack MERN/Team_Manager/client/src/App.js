
import './App.css';
import {Router} from '@reach/router'
import CreatePlayer from './components/CreatePlayer';
import PlayerList from './components/PlayerList';
import UpdatePlayer from './components/UpdatePlayer';
import Detail from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>
      <CreatePlayer path ="/new"/>
      <PlayerList path="/"/>
      <UpdatePlayer path="/update/:id"/>
      <Detail path ="/details/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
