import React, { useState } from "react";
import styles from './Pagination.module.css'
import { returnPaginationRange } from "../../utils/appUtils";

const Pagination = (props) => {
  const [startPage, setStartPage] = useState(1);
  const [page, setPage] = useState('1');
  const [limitNumber, setLimitNumber] = useState(7);

  let array = returnPaginationRange(startPage, limitNumber)

  const changePageHandler = (event) => {
    event.preventDefault();
    const eventTar = event.target;
    const parent = eventTar.parentElement.parentElement;
    
    if (eventTar.nodeName.toLowerCase() === 'a') {

      if (eventTar.dataset.value !== '...') {
        props.changeAdr(props.baseUrl + `character?page=${event.target.dataset.value}`);

        if (parent.querySelector(`.${styles.active}`)) {
          parent.querySelectorAll(`.${styles.active}`).forEach(elem => {
            elem.classList.remove(`${styles.active}`);
          });
        }

        eventTar.classList.add(`${styles.active}`);
      }
    }
  }

  return (
    <ul className={styles.list} onClick={changePageHandler}>
      {array.map((item, index) => {
        if (index === (limitNumber - 1)) {
          return <li key={index}><a href="#" data-value={props.totalCurrentPage}>{props.totalCurrentPage}</a></li>
        } else if (index === (limitNumber - 2)) {
          return <li key={index}><a href="#" data-value="...">...</a></li>
        }
         else {
          return <li key={index}><a href="#" data-value={index + 1}>{index + 1}</a></li>
        }
      })}
    </ul>
  )
}

export default Pagination;