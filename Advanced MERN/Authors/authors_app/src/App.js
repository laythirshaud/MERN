
import { Router } from '@reach/router';
import './App.css';
import AddAuther from './Components/AddAuther';

import Main from './views/Main';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <h1>Favorit Authors</h1>
   <Router>
        <Main path="/"/>
        <Update path="author/:id/edit"/>
        <AddAuther path ="/author"/>
      </Router>
    </div>
  );
}

export default App;
