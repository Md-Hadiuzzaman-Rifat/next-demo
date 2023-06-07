import Image from 'next/image';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>All copy write reserved &copy;  2023</p>
            <div className={styles.footerImg}>
                <Image src="/1.png" width={15} height={15} alt="footer Facebook Link"></Image>
                <Image src="/2.png" width={15} height={15} alt="footer Instagram Link"></Image>
                <Image src="/3.png" width={15} height={15} alt="footer Tweeter Link"></Image>
                <Image src="/4.png" width={15} height={15} alt="footer Youtube Link"></Image>
            </div>
        </div>
    );
};

export default Footer;