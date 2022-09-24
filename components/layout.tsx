import styles from './layout.module.scss'

export default function Layout({ children }: any) {
  return (
    <div className={styles.Layout}>
      <main className={styles.LayoutMain}>
      </main>
    </div>
  )
}