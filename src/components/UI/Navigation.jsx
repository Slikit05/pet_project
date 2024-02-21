import styles from './Navigation.module.css'
import Arrow from './Arrow'
import Pagination from './Pagination'

const Navigation = (props) => {
  const prevPageHandler = () => {
    console.log(props.object)
    if (props.object.info.prev) {
      props.changeAdr(props.object.info.prev)
    }
  }

  const nextPageHandler = () => {
    console.log(props.object)
    if (props.object.info.next) {
      props.changeAdr(props.object.info.next)
    }
  }

  // const changePageHandler = (event) => {
  //   event.preventDefault()
  //   if (event.target.nodeName.toLowerCase() === 'a') {
  //     console.log(event.target.dataset.value)
  //     if (event.target.dataset.value !== '...') {
  //       props.changeAdr(`https://rickandmortyapi.com/api/character?page=${event.target.dataset.value}`)
  //     }
  //   }
  // }

  return (
    <section className={styles.Navigation}>
      <Arrow className={`${styles.arrow} ${styles.prev}`} onClick={prevPageHandler} />

      <Pagination className={styles.list} changeAdr={props.changeAdr} totalCurrentPage={props.object.info.pages} />

      <Arrow className={`${styles.arrow} ${styles.next}`} onClick={nextPageHandler} />
    </section>
  )
}

export default Navigation
