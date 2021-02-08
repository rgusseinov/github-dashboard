import React from 'react'

function City({ cities, cityRef, handleChange, city }) {
  let filteredCities = cities.filter(city => city.population > 50000)
  let newFilteredCities = filteredCities.sort(function(a, b){
    return (a > b) ? 1 : (a < b) ? -1 : 0
  });  

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
        newFilteredCities && newFilteredCities.map((city, index) => 
        <option key={index}>
          {city.city}
        </option>)
     }
    </select>
  )
}

export default City