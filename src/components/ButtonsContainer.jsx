import styles from "./ButtonsContainer.module.css";

export default function ButtonsContainer({ onButtonClick }) {
  let buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonName.map((button, index) => {
        return (
          <button
            key={index}
            className={styles.button}
            onClick={() => onButtonClick(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}
