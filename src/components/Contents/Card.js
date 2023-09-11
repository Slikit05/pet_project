import styles from './Card.module.css'

const Card = (props) => {

  return (
    <div className={styles.item}>
      <div className={styles.wrapImg}>
        <img src={ props.content.image } alt='' />
      </div>
      <div className={styles.text}>
        <span className={styles.name}>{ props.content.name }</span>
        <div>
          <span >Status: { props.content.status }</span>
          <span >Species: { props.content.species }</span>
          <span >Location: { props.content.location ? props.content.location.name : '' }</span>
          <span >Оrigin: { props.content.origin ? props.content.origin.name : '' }</span>
        </div>        
      </div>
    </div>
  )
}

export default Card;