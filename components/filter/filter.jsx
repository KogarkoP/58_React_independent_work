import styles from "./styles.module.css";

const Filter = ({ value, onChange }) => {
  const saveInputValue = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.search_bar_container}>
      <input
        className={styles.search_bar}
        type="search"
        placeholder="Search by Name"
        value={value}
        onChange={saveInputValue}
      />
    </div>
  );
};

export default Filter;
