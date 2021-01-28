import React from 'react'

const Pagination = ({ activePage, pageCount }) =>  {
    let pageItems = ''
    for (let i=0; i<pageCount; i++){
      pageItems += `<li className="page-item ${activePage === i ? 'activePage' : ''}" data-page=${i}><a className="page-link" href="#">${i}</a></li>`
    }
    return(
      <nav aria-label="Page navigation example">
        <ul className="pagination">          
          { pageItems }         
        </ul>
      </nav>
    )

}

export default Pagination