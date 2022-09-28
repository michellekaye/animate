import styles from './layout.module.scss';
import Link from 'next/link';

export default function Layout({ children }: any) {
  return (
		<div className={styles.layout}>
			<div className={styles.legend}>
				<h3 className={styles.legendHeader}>Projects</h3>
				<ul className={styles.legendList}>
					<li><Link href="/projects/basketball">Basketball</Link></li>
					<li><Link href="/projects/bicycle">Bicycle</Link></li>
				</ul>
			</div>

			<main className={styles.layoutMain}>
				{children}
			</main>
    </div>
  )
}