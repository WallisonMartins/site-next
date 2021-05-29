import { HeaderNavBar } from "./HeaderNavBar";
import { HeaderContentMain } from "./HeaderContentMain";
import { HeaderInfo } from "./HeaderInfo";

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.HeroImage}>
            <HeaderNavBar />
            <HeaderContentMain />
            <HeaderInfo />
        </div>
    )
}