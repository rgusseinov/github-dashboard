import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="text" 
             placeholder="Please type github account"
             onChange={(e) => console.log(`type`, e.target.value)} 
             className="mainSearch" 
      />
    </div>
  );
}

export default App;
