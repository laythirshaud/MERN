import { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
class App extends Component {
  render(){
  return (
    <div className="App">
      <PersonCard firstName = "layth"  lastName= "irshaid"   Age= {23} hairColor= "Black"/>
      <PersonCard firstName = "tahseen"  lastName= "mohsen"   Age= {18} hairColor= "brown"/>
      <PersonCard firstName = "tariq"  lastName= "abas"   Age= {36} hairColor= "green"/>
      <PersonCard firstName = "wadee"  lastName= "awwad"   Age= {30} hairColor= "red"/>

    </div>
  );
}
}
export default App;
