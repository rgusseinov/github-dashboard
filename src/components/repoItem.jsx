import React from 'react'
import { Link } from "react-router-dom"


function RepoItem({id, name, url, login, rating, lastCommitDate}){
  return (
    <div className="col-lg-3">
      <div className="card">
        <img src={url} className="card-img-top" alt={name} />        
        <h3> {name} </h3>
        <p> * {rating} </p>
        <p> DT: {lastCommitDate} </p>            
        <div className="card-body">
          <p className="card-text">
            <Link to={`/page/${login}`}> Open link </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RepoItem