import React from 'react'

function MainSearch({ handlesearchTrigger }){

  return(
    <div>
      <input type="text" placeholder="Please type github account" onChange={() => handlesearchTrigger} className="mainSearch" />
    </div>
  )

}

export default MainSearch