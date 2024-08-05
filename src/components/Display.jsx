import styles from "./Display.module.css";
export default function Display({ diplayVal }) {
  return (
    <input className={styles.input} type="text" value={diplayVal} readOnly />
  );
}
