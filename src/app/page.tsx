import styles from './page.module.scss';
import Weather_App from './Weather_App';

export default function Home() {
  return (
    <main className={styles.main}>
      <Weather_App />
    </main>
  );
}
