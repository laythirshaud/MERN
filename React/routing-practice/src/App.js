import { Router } from '@reach/router';
import './App.css';
import Style from './components/Style';
import TheNumber from './components/TheNumber';
import Welcom from './components/Welcom';
function App(props) {
  return (
    <div className="App">
      <Router>
      <Welcom path="/home" />
      <TheNumber path="/:id"/>
      <Style path ="/:hello/:color/:background"/>
      </Router>
    </div>
  );
}

export default App;
