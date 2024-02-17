import styles from './page.module.scss';
import Weather_App from './Weather_App';
import NavBar from './Weather_App/NavBar/NavBar';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Weather_App />
    </main>
  );
}
