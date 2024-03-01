/* estilização */
import styles from './Cards.module.css';

/* Imagens */
import img1 from './img/info1.png';
import img2 from './img/info2.png';
import img3 from './img/info3.png';
import img4 from './img/info4.png';
import img5 from './img/info5.png';
import img6 from './img/info6.png';

const Cards = () => {
  return (
    <div className={styles.principal}>
        <div className={styles.flip_container}>
            <div className={styles.flipper}>
                <div className={styles.front}>
                    <img src={img5} />
                </div>
                <div className={styles.back}>
                    <img src={img6} />
                </div>
            </div>
        </div>
        <div className={styles.flip_container}>
            <div className={styles.flipper}>
                <div className={styles.front}>
                    <img src={img3} />
                </div>
                <div className={styles.back}>
                    <img src={img4} />
                </div>
            </div>
        </div>
        <div className={styles.flip_container}>
            <div className={styles.flipper}>
                <div className={styles.front}>
                    <img src={img1} />
                </div>
                <div className={styles.back}>
                    <img src={img2} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards