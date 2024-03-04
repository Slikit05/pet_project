import React, { useState } from 'react'
import styles from './Pagination.module.css'

const Pagination = (props) => {
  const currentPage = props.currentPage
  let startPage = 1
  let rangePage = 1
  const endPage = props.totalCurrentPage

  let minVisiblePage = currentPage - rangePage < startPage ? startPage : currentPage - rangePage
  let maxVisiblePage = currentPage + rangePage > endPage ? endPage : currentPage + rangePage

  let pages = []

  if (startPage <= minVisiblePage - 1) {
    pages.push(startPage)
  }
  if (startPage < minVisiblePage - 1) {
    pages.push('...')
  }

  for (let idx = minVisiblePage; idx <= maxVisiblePage; idx++) {
    pages.push(idx)
  }

  if (maxVisiblePage + 1 < endPage) {
    pages.push('...')
  }
  if (maxVisiblePage + 1 <= endPage) {
    pages.push(endPage)
  }

  const changeCurrent = (number) => {
    props.changeAdr(`https://rickandmortyapi.com/api/character?page=${number}`)
    props.setCurrentPage(number)
  }

  return (
    <ul className={styles.list}>
      {pages.map((page, index) => {
        return (
          <li key={index} className={page === currentPage ? styles.active : ''}>
            <button
              onClick={() => {
                changeCurrent(page)
              }}
            >
              {page}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination
