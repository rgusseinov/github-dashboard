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
                                 />)
      }
    </div>
  )


}



export default Home