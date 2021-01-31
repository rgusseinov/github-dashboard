import React from 'react'
import RepoItem from './repoItem'


const Home = ({repos}) => {
 
  return (
    <div>
      <div className="container">
        <div className="row">
          {
            repos.map((item, key) => <RepoItem
                                        key={key}
                                        id={item.id}
                                        name={item.login}
                                        url={item.url}
                                        login={item.login}
                                        rating={item.rating}
                                        lastCommitDate={item.lastCommitDate}
                                    />)
          }
        </div>
      </div>
    </div>
  )


}

export default Home