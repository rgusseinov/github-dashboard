import React from 'react'

function City({ cities, cityRef }) {
  return (
    <select id="city" ref={cityRef} className="form-select" aria-label="Default select example">
     { 
        cities && cities.map((city, index) => 
        <option key={index}>
          {city.city}
        </option>)
     }
    </select>
  )
}

export default City