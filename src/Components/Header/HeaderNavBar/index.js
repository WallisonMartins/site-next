import { Container } from "react-bootstrap";

import styles from "./HeaderNavBar.module.scss";

export const HeaderNavBar = () => {
  return (
    <Container>
      <div className={styles.menuContainer}>
        <img src="/img/brand.png" alt="Joyjet" />
        <ul className={styles.navMenuRow}>
          <li className={styles.navMenuItem}>
            <a href="#">BLOG</a>
          </li>
          <li className={styles.navMenuItem}>
            <a href="#">POPULAR</a>
          </li>
          <li className={styles.navMenuItem}>
            <a href="#">ARCHIVE</a>
          </li>
          <li className={styles.navMenuItem}>
            <a href="#">ABOUT</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};
