import React from 'react'
import Home from './components/Home'
import './App.css';
import MainSearch from './components/MainSearch';
import { apiService } from './core/apiService';
import Pagination from './components/Pagination';


class App extends React.Component {
  
  constructor(){
    super()
  
    this.state = {
      filteredRepos: [],
      activePage: 1,
      pageCount: 0
    }
  
  }


  onFormSeach = async (e) => {
    const keyword = e.target.value
    const filteredRepos = []
    // https://api.github.com/search/users?q=rus&per_page=5&page=2

    if (keyword.length > 2){
      const data = await apiService.getUsers({q:keyword, per_page: 5, page: 1})    
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
        <Pagination activePage={this.state.activePage, this.state.pageCount} />
      </div>
    );
  }
  
}



export default App;
