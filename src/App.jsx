import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [input, setInput] = useState("");

  let handleButton = (btnText) => {
    if (btnText === "C") {
      setInput("");
    } else if (btnText === "=") {
      const result = eval(input);
      setInput(result);
    } else {
      let newDispval = input + btnText;
      setInput(newDispval);
    }
  };
  return (
    <center>
      <div className={styles.calculator}>
        <Display diplayVal={input} />
        <ButtonsContainer onButtonClick={handleButton} />
      </div>
    </center>
  );
}

export default App;
