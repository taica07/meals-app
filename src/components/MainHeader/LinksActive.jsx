'use client';

import { usePathname } from 'next/navigation';
import styles from './LinksActive.module.css';
import Link from 'next/link';

const LinksActive = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? styles.active : ''}>
      {children}
    </Link>
  );
};

export default LinksActive;
