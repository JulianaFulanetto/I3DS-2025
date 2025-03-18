import styles from "./MovieCards.module.css";

const MovieCards = (props) => {
  return (
    <div className={styles.movie}>
      <div>
        <p>{props.Year}</p>
      </div>

      <div>
      <img src={props.Poster} alt="" />
      </div>

      <div>
      <span>{props.Type}</span>
      <h3>{props.Title}</h3>
      </div>

    </div>
  );
};

export default MovieCards;
