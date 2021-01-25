import React from 'react'
import Home from './components/Home'
import './App.css';
import MainSearch from './components/MainSearch';
import { apiService } from './core/apiService';


class App extends React.Component {
  
  state = {
    repos: []
  }

  onFormSeach = async (e) => {
    const keyword = e.target.value
    const initialState = this.state.repos
    // initialState.push(keyword)
    
    const posts = await apiService.getPosts()
    Object.keys(posts).forEach(item => {
      // console.log(`posts`, posts[item])
      initialState.push({
        id: posts[item].id,
        name: posts[item].name
      })
    })

    this.setState({
      repos: initialState
    })
  }

  render(){
    return (
      <div className="App">
        <MainSearch handlesearchTrigger={this.onFormSeach} />
        <Home repos={this.state.repos}/>
      </div>
    );
  }
  
}



export default App;
