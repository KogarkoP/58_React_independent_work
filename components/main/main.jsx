import Card from "../card/card";
import styles from "./styles.module.css";

const Main = ({ characters }) => {
  return (
    <>
      {characters.map((c) => {
        return <Card name={c.name} yearOfBirth={c.yearOfBirth} img={c.image} />;
      })}
    </>
  );
};

export default Main;
