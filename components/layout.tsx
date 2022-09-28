import styles from './layout.module.scss';
import Link from 'next/Link';

export default function Layout({ children }: any) {
  return (
		<div className={styles.layout}>
			<div className={styles.legend}>
				<h3 className={styles.legendHeader}>Projects</h3>
				<Link href="/projects/basketball">Basketball</Link>
			</div>

			<main className={styles.layoutMain}>
				{children}
			</main>
    </div>
  )
}