import React from 'react'
import { Route } from "react-router-dom"
import Home from './components/Home'
import './App.css';
import MainSearch from './components/MainSearch';
import { apiService } from './core/apiService';
import Pagination from './components/Pagination';
import DetailView from './components/DetailView';


class App extends React.Component {
  
  constructor(){
    super()
  
    this.state = {
      filteredRepos: [],
      activePage: 1,
      totalRepos: 0,
      pageCount: 0,
      keyword: ''
    }
  
  }


  onFormSeach = async (e) => {
    const keyword = e.target.value
    const filteredRepos = []
    // https://api.github.com/search/users?q=rus&per_page=5&page=2

    if (keyword.length > 2){
      const data = await apiService.getUsers({q:keyword, page: 1})    
      const dataItems = data.items || []
      const totalRepos = data.total_count || 0

      dataItems.forEach(repo => {
        filteredRepos.push({
          id: repo.id,
          login: repo.login,
          url: repo.avatar_url
        })
      })

      this.setState({
        filteredRepos: filteredRepos,
        totalRepos: totalRepos,
        keyword: keyword
      })

      // console.log(`pageN`, data)
    }

    

    
    const pageN = Math.round(this.state.totalRepos / 10)
    
    this.setState({
      pageCount: pageN
    })
    




  }

  handlePageChange = async (e) => {
    const pageId = e.target.getAttribute('data-page')
    const keyword = this.state.keyword
    const filteredRepos = []

    if (keyword.length > 2){
      const data = await apiService.getUsers({q:keyword, page: pageId})    
      const dataItems = data.items || []
      console.log(`dataItems`, dataItems)

      dataItems.forEach(repo => {
        filteredRepos.push({
          id: repo.id,
          login: repo.login,
          url: repo.avatar_url
        })
      })
    }

    this.setState({
      activePage: pageId,
      filteredRepos: filteredRepos
    })

    // console.log(`Page changed`, e.target.getAttribute('data-page'))
  }

  render(){
    return (
      <div className="App">
        <Pagination
          activePage={this.state.activePage}
          pageCount={this.state.pageCount}
          onPageChange={this.handlePageChange}
        />

        
        <Route path="/" render={() => <Home repos={this.state.filteredRepos} />} exact />
        <Route path="/page" component={DetailView} exact/>
        

        <MainSearch handlesearchTrigger={this.onFormSeach} />
        <h3>Count of users: {this.state.filteredRepos.length}</h3>
      </div> 
    );
  }
  
}



export default App;
