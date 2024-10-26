import styles from "./Cards.module.css";

export const Cards = ({ personajes }) => {
  return (
    <div className={styles.cards}>
      {personajes.map(({ id, image, name, race, description }) => (
        <Card
          key={id}
          image={image}
          name={name}
          race={race}
          description={description}
        />
      ))}
    </div>
  );
};

const Card = ({ image, name, race, description }) => {
  return (
    <article className={styles.cardBox}>
      <div className={styles.card}>
        <div className={styles.front}>
          <img src={image} alt={name} className={styles.image} />

          <p className={styles.name}>name: {name}</p>
        </div>
        <div className={styles.back}>
          <p>race: {race}</p>
          <p>description: {description}</p>
        </div>
      </div>
    </article>
  );
};
