import React, { useState } from 'react'
import styles from './Pagination.module.css'
import { returnPaginationRange } from '../../utils/appUtils'

// <?php
// $currentPage = (int)$_GET['page'];
// $startPage = 1;
// $endPage = 56;
// $rangePage = 1;
// for ($i = $startPage; $i <= $endPage; $i++) {
//     if ($i === $startPage) {
//         echo '<a href="?page='.$i.'">'.$startPage.'</a>';
//     } elseif($i === $currentPage) {
//         echo '<a href="?page='.$i.'">'."<b>$i</b>".'</a>';
//     } elseif ($i === $currentPage - ($rangePage+1) || $i === $currentPage + ($rangePage+1)) {
//         echo '<a href="?page='.$i.'">'.'...'.'</a>';
//     } elseif ($i - $rangePage <= $currentPage && $currentPage <= $i +$rangePage) {
//         echo '<a href="?page='.$i.'">'.$i.'</a>';
//     } elseif($i === $endPage) {
//         echo '<a href="?page='.$i.'">'.$endPage.'</a>';
//         continue;
//     } else {
//         continue;
//     }
//     echo ' --- ';
// }

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  let startPage = 1
  let rangePage = currentPage
  const endPage = props.totalCurrentPage
  const DOTS = '...'

  const arr = [...Array(6)]

  const changeCurrent = (number) => {
    props.changeAdr(`https://rickandmortyapi.com/api/character?page=${number}`)
    setCurrentPage(number)
  }

  return (
    <ul className={props.className}>
      {arr.map((el, index) => {
        if (index === startPage - 1) {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  changeCurrent(startPage)
                }}
              >
                {startPage}
              </button>
            </li>
          )
        } else if (index === 1 && currentPage >= startPage + 2) {
          return (
            <li key={index}>
              <button>{DOTS}</button>
            </li>
          )
        } else if (index < arr.length - 2) {
          rangePage++
          const number = rangePage

          return (
            <li key={index}>
              <button
                onClick={() => {
                  changeCurrent(number)
                }}
              >
                {number}
              </button>
            </li>
          )
        } else if (index === arr.length - 2 && currentPage <= endPage - 1) {
          return (
            <li key={index}>
              <button>{DOTS}</button>
            </li>
          )
        } else if (index === arr.length - 1) {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  changeCurrent(endPage)
                }}
              >
                {endPage}
              </button>
            </li>
          )
        }
      })}
    </ul>
  )
}

export default Pagination
