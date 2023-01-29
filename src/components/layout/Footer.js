import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Pacote importado para utilização de icones (nesse caso, do font awesome)
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p>Nosso rodapé</p>
        </footer>
    );
}

export default Footer;