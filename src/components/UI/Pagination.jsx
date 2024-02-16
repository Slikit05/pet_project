import React, { useState } from "react";
import styles from './Pagination.module.css'

const Pagination = (props) => {

  const [arrTest, setArrTest] = useState(['1', '2', '3', '4', '...', '6',]);
  
  if (typeof props.totalCurrentPage === 'number') {
    // console.log(props.totalCurrentPage)
  }

  return (
    <ul className={props.className} onClick={props.onClick}>
      {arrTest.map((item, index) => {
        if (index === 4) {
          return <li key={index}><a href="#" key={index} data-value='...'>...</a></li>
        } else if (index === 5) {
          return <li key={index}><a href="#" data-value={props.totalCurrentPage}>{props.totalCurrentPage}</a></li>
        } else {
          return <li key={index}><a href="#" data-value={index + 1}>{index + 1}</a></li>
        }
      })}
    </ul>
  )
}

export default Pagination;