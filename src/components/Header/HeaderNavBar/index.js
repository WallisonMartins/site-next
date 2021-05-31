import React, { useState, useEffect } from 'react';

import { Container } from "react-bootstrap";
import { FaTimes, FaBars  } from 'react-icons/fa'

import styles from "./HeaderNavBar.module.scss";

export const HeaderNavBar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);

  const changeNavBackground = () => {
    if(window.scrollY < 60) {
      setNavbar(false);
      setClick(false);
    } else {
      setNavbar(true);
    }
  }

  useEffect(() => {
    return window.addEventListener('scroll', changeNavBackground);
  }, [])
  

  return (
    <Container>
      <div className={navbar ? `${styles.menuContainerActive}` : `${styles.menuContainer}`}>
        <img src="/img/brand.png" alt="Joyjet" />
        <div className={styles.containerNav}>
          <ul className={!click ? `${styles.navMenuRow}` : `${styles.navMenuRowActive}`}>
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
          <div className={styles.navIcon} onClick={handleClick}>
            {click ? 
              <FaTimes /> : 
              <FaBars />
            }
          </div>
        </div>
      </div>
    </Container>
  );
};
