import React from 'react'
import { Route, Switch, Link } from "react-router-dom"
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
  

  async componentDidMount(){
    const result = await apiService.getTopRepos()
    const dataItems = result.items || []
    const filteredRepos = []

    // console.log(`dataItems`, dataItems)

    dataItems.forEach(repo => {
      filteredRepos.push({
        id: repo.owner.id,
        login: repo.owner.login,
        url: repo.owner.avatar_url,
        rating: repo.stargazers_count,
        lastCommitDate: repo.pushed_at
      })
    })

    this.setState({
      filteredRepos: filteredRepos
    }) 
  }


  newFunction(){
    console.log(`Data here`)
  }

  handleFindID(){
    console.log(`Data`)
  }

  onFormSeach = async (e) => {
    const keyword = e.target.value
    const filteredRepos = []
    
    if (keyword.length > 2){
      const data = await apiService.getUsers({q:keyword, page: 1})    
      const dataItems = data.items || []
      const totalRepos = data.total_count || 0


      console.log(`filteredRepos`, dataItems)

      dataItems.forEach(repo => {
        filteredRepos.push({
          id: repo.id,
          login: repo.login,
          url: repo.avatar_url,
          rating: repo.stargazers_count,
          lastCommitDate: repo.pushed_at
        })
      })

      this.setState({
        filteredRepos: filteredRepos,
        totalRepos: totalRepos,
        keyword: keyword
      })

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

      dataItems.forEach(repo => {
        filteredRepos.push({
          id: repo.id,
          login: repo.login,
          url: repo.avatar_url,
          rating: repo.stargazers_count,
          lastCommitDate: repo.pushed_at
        })
      })
    }

    this.setState({
      activePage: pageId,
      filteredRepos: filteredRepos
    })
  }

  render(){
    return (
      <div className="App">

        <Switch>
          <Route path="/" exact>
            <MainSearch handlesearchTrigger={this.onFormSeach} />
            <Pagination
              activePage={this.state.activePage}
              pageCount={this.state.pageCount}
              onPageChange={this.handlePageChange}
            />
            <Home repos={this.state.filteredRepos} />
          </Route>

          <Route path="/page/:id" component={DetailView} />
        </Switch>

      </div> 
    );
  }
  
}



export default App;
