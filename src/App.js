import './App.css';
import styles from './styles.module.css'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.SideBar}>
        LeftSide
      </div>
      <div className={styles.Content}>
        RightSide
      </div>
    </div>
  );
}

export default App;
