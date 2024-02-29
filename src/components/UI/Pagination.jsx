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
  const startPage = 1
  const [rangePage, setRangePage] = useState(1)
  const endPage = props.totalCurrentPage

  return (
    <ul className={props.className}>
      {[...Array(6)].map((el, index) => {
        if (index === startPage) {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  props.changeAdr(`https://rickandmortyapi.com/api/character?page=${index}`)
                }}
              >
                {startPage}
              </button>
            </li>
          )
        } else if (index === )

        // if (index === 4) {
        //   return (
        //     <li key={index}>
        //       <button>...</button>
        //     </li>
        //   )
        // } else if (index === 5) {
        //   return (
        //     <li key={index}>
        //       <button
        //         onClick={() => {
        //           props.changeAdr(`https://rickandmortyapi.com/api/character?page=${index}`)
        //         }}
        //       >
        //         {endPage}
        //       </button>
        //     </li>
        //   )
        // } else {
        //   return (
        //     <li key={index}>
        //       <button
        //         onClick={() => {
        //           props.changeAdr(`https://rickandmortyapi.com/api/character?page=${index + 1}`)
        //         }}
        //       >
        //         {index + 1}
        //       </button>
        //     </li>
        //   )
        // }
      })}
    </ul>
  )
}

export default Pagination
