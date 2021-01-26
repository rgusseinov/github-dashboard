import React from 'react'
import Home from './components/Home'
import './App.css';
import MainSearch from './components/MainSearch';
import { apiService } from './core/apiService';


class App extends React.Component {
  
  state = {
    filteredRepos: []
  }

  onFormSeach = (e) => {
    const keyword = e.target.value
    if (keyword.length > 2){

      const repos = [
        {id: 1, login: 'alena', rating: 4},
        {id: 2, login: 'andrey', rating: 5},
        {id: 3, login: 'akif', rating: 3},
        {id: 4, login: 'polina', rating: 2},
        {id: 5, login: 'petr', rating: 4},
        {id: 6, login: 'maxim', rating: 2},
        {id: 7, login: 'anton', rating: 2},
        {id: 8, login: 'ruslan', rating: 4},
        {id: 9, login: 'alexey', rating: 5},
        {id: 10, login: 'zeeshan', rating: 1}
      ]
  
  
  
      const newArr = []
      for (let i=0; i<repos.length; i++){
        const repo = repos[i]
  
        if (~repo.login.indexOf(keyword)){

          newArr.push({
            id: repo.id,
            login: repo.login
          })
         
        }
      }

       this.setState({
        filteredRepos: newArr
      })

      // console.log(`newArr:`, newArr)
    }



  }

  render(){
    return (
      <div className="App">
        <MainSearch handlesearchTrigger={this.onFormSeach} />
        <Home repos={this.state.filteredRepos}/>
      </div>
    );
  }
  
}



export default App;
