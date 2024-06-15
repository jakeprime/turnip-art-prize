import { useContext } from "react";
import styles from "./Grid.module.css";
import { Context } from "./App";

const Grid = () => {
  const { grid, setGrid, selectedCrop } = useContext(Context);

  const plantCrop = (i, j) => {
    const newGrid = grid.map((row) => row.map((cell) => cell));
    newGrid[i][j] = selectedCrop;
    setGrid(newGrid);
  };

  return (
    <div>
      {grid.map((row, i) => (
        <div className={styles.row}>
          {row.map((cell, j) => (
            <div className={styles.cell} onClick={() => plantCrop(i, j)}>
              <img className={styles.crop} src={cell} alt="" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
