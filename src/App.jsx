import { createContext, useState } from "react";

import styles from "./App.module.css";

import { randomCrop } from "./Crops";
import Grid from "./Grid";
import Selector from "./Selector";

const ROWS = 10;
const COLS = 12;

export const Context = createContext(null);

const App = () => {
  const [grid, setGrid] = useState(
    new Array(ROWS).fill(null).map(() => new Array(COLS).fill(null)),
  );

  const [selectedCrop, setSelectedCrop] = useState(randomCrop(), []);

  return (
    <div className={styles.app}>
      <Context.Provider
        value={{ grid, setGrid, selectedCrop, setSelectedCrop }}
      >
        <header className={styles.header}>
          <Grid />
          <Selector />
        </header>
      </Context.Provider>
    </div>
  );
};

export default App;
