import React, { useState } from 'react';

/* Style */
import styles from './Home.module.css';

/* Imagens */
import capa from './img/capa_projeto1.png';

/* Linkagens */
import { Link } from 'react-router-dom';
import Grafico from './componente/Grafico';
import Cards from './componente/Cards';


{/* 
import Container from 'react-bootstrap/Container';
*/}

function Home() {

    const [mostrarCards, setMostrarCards] = useState(true);

    const handleClick = () => {
        setMostrarCards(!mostrarCards);
    };

    return (
        <div>
            <div className={styles.cont}>
                <img className={styles.back} src={capa} />
                <Link className={styles.link}to="/relatar">
                    <button className={styles.btn}>Relatar</button>
                </Link>
            </div>
            <div className={styles.serv}>
                <h1 className={styles.titulo}>Nossos serviços</h1>
                <Cards />
            </div>
            <Grafico />
        </div>
    )
}

export default Home