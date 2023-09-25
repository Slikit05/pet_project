import styles from "./Cards.module.css";
import Card from "./Card";

const Cards = (props) => {
  

  if (props.cardsArr.length !== 0) {
    return (
      <section className={styles.cardsWrapper}>
        <div className={styles.cards}>
          { props.cardsArr.map((item) => (
            <Card key={item.id} content={item} />
          )) }
        </div>
      </section>
    );
  } else {
    return (
      <section className={styles.cardsWrapper}>
        <div>
          <h2>Данных не найдено</h2>
        </div>
      </section>
    )
  }
};

export default Cards;
