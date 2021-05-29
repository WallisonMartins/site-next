
import { Container, Row } from 'react-bootstrap';
import styles from './HeaderInfo.module.scss';

export const HeaderInfo = () => {
    return (
        <div className={styles.HeaderInfoContainer}>
            <Container>
                <Row>
                    <div className={`col-sm ${styles.TitleInfo}`}>
                        <p>Trending</p>
                        <p>Today</p>
                    </div>
                    <div className={`col-sm ${styles.BoxInfo}`}>
                        <p>Lorem ipsum dolor sit amet, consectetuer 
                        adipiscing <br/>ligula eget dolor.</p>
                    </div>
                    <div className={`col-sm ${styles.BoxInfo}`}>
                        <p>Lorem ipsum dolor sit amet, consectetuer 
                        adipiscing <br/>ligula eget dolor.</p>
                    </div>
                    <div className={`col-sm ${styles.BoxInfo}`}>
                        <p>Lorem ipsum dolor sit amet, consectetuer 
                        adipiscing <br/>ligula eget dolor.</p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}