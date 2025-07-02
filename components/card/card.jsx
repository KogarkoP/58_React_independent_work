import styles from "./styles.module.css";
import Avatar from "@/assets/images/avatar-icon.jpg";

const Card = ({ name, yearOfBirth, img }) => {
  const imgToShow = img ? img : Avatar.src;

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.img_wrapper}>
        <img src={imgToShow} alt={name} />
      </div>
      <div className={styles.character_data}>
        <h3>{name}</h3>
        <p>{yearOfBirth}</p>
      </div>
    </div>
  );
};

export default Card;
