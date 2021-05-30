import { Container } from 'react-bootstrap';
import { MainCarousel } from './MainCarousel';
import { About } from './About';

export const Main = () => (
  <Container>
    <MainCarousel />
    <About />
  </Container>
);
