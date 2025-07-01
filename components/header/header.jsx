import styles from "./styles.module.css";

const Header = ({ linksArray }) => {
  return (
    <div>
      <div className={styles.logo}></div>
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
