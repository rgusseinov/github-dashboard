import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiService } from '../core/apiService'

const DetailView = ({ match }) => {
  
  useEffect(() => {
    fetchUser()
  }, [])

  const [item, setItem] = useState(null)

  const fetchUser = async () => {
    const user = await apiService.getUser(match.params.id)
  
    setItem(user)
  }

  console.log(`item`, item)

  return(
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
        <div className="card">
          <img src={item && item.avatar_url} className="card-img-top" alt={item && item.name} />        
          <h3>{item && item.login} </h3>
          <p> * {item && item.followers} </p>
          <p> DT: {item && item.updated_at} </p>            
          <div className="card-body">
            <p className="card-text">
              <Link to="/"> Go to main menu </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DetailView