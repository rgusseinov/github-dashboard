import React from 'react'
import RepoItem from './repoItem'


const Home = ({repos}) => {

  return (
    <div>
      {
        repos.map((item, key) => <RepoItem
                                    key={key}
                                    id={item.id}
                                    name={item.login}
                                    url={item.url}
                                 />)
      }
    </div>
  )


}



export default Home