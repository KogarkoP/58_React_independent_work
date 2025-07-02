import { useState } from "react";
import Card from "../card/card";
import Filter from "../filter/filter";
import styles from "./styles.module.css";

const Main = ({ characters, loading }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const filteredCharacters = characters.filter((char) => {
    return char.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  if (loading) {
    return (
      <div className={styles.loading_wrapper}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  return (
    <div className={styles.page_wrapper}>
      <Filter value={searchValue} onChange={handleSearch} />
      <div className={styles.cards_wrapper}>
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((c) => {
            return (
              <Card name={c.name} yearOfBirth={c.yearOfBirth} img={c.image} />
            );
          })
        ) : (
          <span>No characters found</span>
        )}
      </div>
    </div>
  );
};

export default Main;
