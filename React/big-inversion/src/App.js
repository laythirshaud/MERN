import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName="layth" lastName="Irshaid" Age={ 23 } hairColor="black" /> 
      <PersonCard firstName="layth" lastName="Irshaid" Age={ 23 } hairColor="black" /> 
      <PersonCard firstName="layth" lastName="Irshaid" Age={ 23 } hairColor="black" /> 
      <PersonCard firstName="layth" lastName="Irshaid" Age={ 23 } hairColor="black" /> 
    </div>
  );
}

export default App;
