import styles from './canvas.module.scss';

export default function Canvas({ children }: any) {
  return (
		<div className={styles.container}>
			{ children }
		</div>
  )
}