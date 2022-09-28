import Canvas from '../../components/canvas';
import Title from '../../components/title';
import styles from './basketball.module.scss';

export default function Basketball() {
	return (
		<>
			<Canvas>
				<div className={styles.basketballContainer}>
					<div className={styles.basketball}>
						<div className={styles.highlight} />
						<div className={styles.basketballLine1} />
						<div className={styles.basketballLine2} />
					</div>

					<div className={styles.shadow} />
				</div>
			</Canvas>

			<Title title="Basketball bounce" date="Septembers 27, 2022"/>
		</>
	)
}