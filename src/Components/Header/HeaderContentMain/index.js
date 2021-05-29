import { HeaderButton } from '../HeaderButton';

import { Container } from 'react-bootstrap';

import styles from './HeaderContentMain.module.scss';

export const HeaderContentMain = () => {
    return (
        <Container>
            <div className={styles.ContainerContentMain}>
                <h1>SPACE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                    Quisque molestie elit at lacus...</p>
                <HeaderButton />
            </div>
        </Container>
    )
}
