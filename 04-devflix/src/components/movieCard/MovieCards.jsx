import styles from "./MovieCards.module.css";

const MovieCards = (props) => {
  return (
    <div className={styles.movies}>
      <div>
        <p>{props.Year}</p>
      </div>

      <img src={props.Poster} alt="" />
      <h4>{props.Type}</h4>
      <h3>{props.Title}</h3>
    </div>
  );
};

export default MovieCards;
