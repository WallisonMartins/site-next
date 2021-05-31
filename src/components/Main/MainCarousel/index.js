import {Container} from 'react-bootstrap';
import { Cards } from '../Card';

import styles from './MainCarousel.module.scss';

export const MainCarousel = () => {
  return (
    <Container className={styles.CarouselContainer}>
      <Cards />
    </Container>
  );
}
