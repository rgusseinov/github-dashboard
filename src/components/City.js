import React from 'react'

function City({ cities, cityRef, handleChange, city }) {
  return (
    <select 
      id="city"
      ref={cityRef}
      onChange={handleChange}
      className="form-select"
      name="city"
      value={city}
      aria-label="Default select example"
    >
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