import React from 'react'

function RepoItem({id, name, url, descr}){
  return (
    <div className="card">
      <img src={url} className="card-img-top" alt={name} />
      <h3> {name} </h3>
      <div className="card-body">
        <p className="card-text">
            {descr}
        </p>
      </div>
    </div>
  )
}

export default RepoItem