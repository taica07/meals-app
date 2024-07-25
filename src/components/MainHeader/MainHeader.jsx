import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/src/assets/logo.png';
import styles from './MainHeader.module.css';
import MainHeaderBackground from '../MainHeaderBackground/MainHeaderBackground';
import LinksActive from './LinksActive';

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image
            priority
            // width={300}
            // height={300}
            src={logoImg}
            alt="A plate with food on it"
          />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <LinksActive href="/meals">Browse Meals</LinksActive>
            </li>
            <li>
              <LinksActive href="/community">Foodies Community</LinksActive>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
