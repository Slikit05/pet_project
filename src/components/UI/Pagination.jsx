import React, { useState } from 'react'
import styles from './Pagination.module.css'

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <ul className={props.className} onClick={props.onClick}>
      {[...Array(6)].map((el, index) => {
        if (index === 4) {
          return (
            <li key={index}>
              <button>...</button>
            </li>
          )
        } else if (index === 5) {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  props.changeAdr(`https://rickandmortyapi.com/api/character?page=${index}`)
                }}
              >
                {props.totalCurrentPage}
              </button>
            </li>
          )
        } else {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  props.changeAdr(`https://rickandmortyapi.com/api/character?page=${index + 1}`)
                }}
              >
                {index + 1}
              </button>
            </li>
          )
        }
      })}
    </ul>
  )
}

export default Pagination
