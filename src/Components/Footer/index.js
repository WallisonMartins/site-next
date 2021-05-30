import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <Container className={styles.ContainerFooter}>
      <p>© 2016 Created by Joyjet Digital Space Agency</p>
    </Container>
  )
}