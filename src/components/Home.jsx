import React from 'react'
import RepoItem from './repoItem'


const Home = ({repos}) => {

  // console.log(`repos`, repos)
  return (
    <div>
      {
        repos.map((item, key) => <RepoItem
                                  key={key}
                                  id={item.id}
                                  name={item.name}
                                  descr={item.name}
                                  url={item.name}
                                 />)
      }
    </div>
  )


}



export default Home