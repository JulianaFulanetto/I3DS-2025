import styles from "./perfil.module.css";

const Perfil = ({ children, fotoPerfil }) => {
  //objeto filho
  return (
    <div id={styles.perfil}>
      <div id={styles.framePerfil}>
        <img src={fotoPerfil} alt="" />
      </div>
      <p>{children}</p>
    </div>
  );
};

export default Perfil;
