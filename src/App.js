import React from 'react'
import Home from './components/Home'
import './App.css';
import MainSearch from './components/MainSearch';
//  const response = await fetch('https://api.github.com/repositories')


class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <MainSearch />
        <Home />
      </div>
    );
  }
}



export default App;
