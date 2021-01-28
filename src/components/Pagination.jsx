import React from 'react'

const Pagination = ({ activePage, pageCount, onPageChange }) =>  {
    const pageItems = []
    const pageLimit = 10
    let n = 0
    if (pageCount < pageLimit) n = pageCount; else n = pageLimit

    for (let i=1; i<=n; i++){
      pageItems.push(
        <li key={i} className={`page-item ${activePage == i ? 'active' : ''}`}>
              <a data-page={i} className="page-link" onClick={onPageChange}>{i}</a>
        </li>)
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