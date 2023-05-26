import {memo} from "react"
import "./style.css"
import {fetchPageNumbers} from "../../utils";
import PropTypes from "prop-types";

function Pagination({currentPage, totalPages, goToPage}) {

  const pages = fetchPageNumbers(totalPages, currentPage)

  const handlePageClick = page => evt => {
    evt.preventDefault()
    console.log(page)
    if(page !== currentPage) {
      goToPage(page)
    }
  }

  console.log(pages)
  return (
    <div className="Pagination">
      {pages.map((page, index) => <a
        onClick={handlePageClick}
        key={index}>
        {page}
      </a>)}
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
}

Pagination.defaultProps = {
  goToPage: () => {}
}

export default memo(Pagination)
