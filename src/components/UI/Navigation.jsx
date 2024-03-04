import React, { useState } from 'react'
import styles from './Navigation.module.css'
import Arrow from './Arrow'
import Pagination from './Pagination'

const Navigation = (props) => {
  const [currentPage, setCurrentPage] = useState(1)

  const prevPageHandler = () => {
    console.log(props.object)
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
    if (props.object.info.prev) {
      props.changeAdr(props.object.info.prev)
    }
  }

  const nextPageHandler = () => {
    console.log(props.object)
    if (currentPage < props.object.info.pages) {
      setCurrentPage(currentPage + 1)
    }
    if (props.object.info.next) {
      props.changeAdr(props.object.info.next)
    }
  }

  return (
    <section className={styles.navigation}>
      <Arrow className={`${styles.arrow} ${styles.prev}`} onClick={prevPageHandler} />

      <Pagination
        changeAdr={props.changeAdr}
        totalCurrentPage={props.object.info.pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Arrow className={`${styles.arrow} ${styles.next}`} onClick={nextPageHandler} />
    </section>
  )
}

export default Navigation
