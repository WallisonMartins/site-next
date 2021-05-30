import { Container } from 'react-bootstrap';
import { HeaderButton } from '../HeaderButton';

import styles from './HeaderContentMain.module.scss';

export const HeaderContentMain = () => (
  <Container>
    <div className={styles.ContainerContentMain}>
      <h1>SPACE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Quisque molestie elit at lacus...
      </p>
      <HeaderButton />
    </div>
  </Container>
);
