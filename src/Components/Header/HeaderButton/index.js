import styles from './HeaderButton.module.scss';

export const HeaderButton = () => {
    return (
        <button className={styles.Button}>
            <a href="#">click</a>
        </button>
    )
}