import React from 'react'
import Home from './components/Home'
import './App.css';
import MainSearch from './components/MainSearch';
import { apiService } from './core/apiService';


class App extends React.Component {
  
  constructor(){
    super()
    
    this.repos = [
      {id: 1, login: 'alena', rating: 4},
      {id: 2, login: 'andrey', rating: 5},
      {id: 3, login: 'akif', rating: 3},
      {id: 4, login: 'polina', rating: 2},
      {id: 5, login: 'petr', rating: 4},
      {id: 6, login: 'maxim', rating: 2},
      {id: 7, login: 'anton', rating: 2},
      {id: 8, login: 'ruslan', rating: 4},
      {id: 9, login: 'alexey', rating: 5},
      {id: 10, login: 'zeeshan', rating: 1},
      {id: 11, login: 'alesha', rating: 4}
    ]

    this.state = {
      filteredRepos: []
    }
  
  }


  onFormSeach = async (e) => {
    const keyword = e.target.value
    const filteredRepos = []

    if (keyword.length > 2){
      const data = await apiService.getUsers(keyword)      
      const dataItems = data.items || []

      dataItems.forEach(repo => {
        filteredRepos.push({
          id: repo.id,
          login: repo.login,
          url: repo.avatar_url
        })
      })

    }

    this.setState({
      filteredRepos: filteredRepos
    })

  }

  render(){
    return (
      <div className="App">
        <MainSearch handlesearchTrigger={this.onFormSeach} />
        <h3>Count of users: {this.state.filteredRepos.length}</h3>
        <Home repos={this.state.filteredRepos}/>
      </div>
    );
  }
  
}



export default App;
