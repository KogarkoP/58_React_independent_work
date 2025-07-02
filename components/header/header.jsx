import styles from "./styles.module.css";

const Header = ({ linksArray }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="http://localhost:3000/">Harry Potter</a>
      </div>
      <ul>
        {linksArray.map((l) => {
          return (
            <li>
              <a href={l.link}> {l.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
