import React from 'react'

function RepoItem({id, name}){
  return (
    <div className="card">
      <img src="" className="card-img-top" alt={name} />
      <h3> {name} </h3>
      <div className="card-body">
        <p className="card-text">
            
        </p>
      </div>
    </div>
  )
}

export default RepoItem