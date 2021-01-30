import React from 'react'
import { Link } from "react-router-dom"


function RepoItem({id, name, url}){
  return (
    <div className="card">
      <img src={url} className="card-img-top" alt={name} />
      <h3> {name} </h3>
      <div className="card-body">
        <p className="card-text">
          <Link to="/page"> Open link </Link>  
        </p>
      </div>
    </div>
  )
}

export default RepoItem