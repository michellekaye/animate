import styles from './title.module.scss';

export default function Title({ title, date }: { title: string, date: string }) {
  return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			<hr className={styles.hr} />
			<h3 className={styles.date}>DATE: {date}</h3>
    </div>
  )
}