import styles from "./Grid.module.css";
import amaranth from "./images/crops/Amaranth_Stage_5.png";
import collie from "./images/crops/Cauliflower_Stage_6.png";
import melon from "./images/crops/Melon_Stage_6.png";
import powderMelon from "./images/crops/Powdermelon_Stage_6.png";
import pumpkin from "./images/crops/Pumpkin_Stage_6.png";
import redCabbage from "./images/crops/Red_Cabbage_Stage_6.png";
import rhubarb from "./images/crops/Rhubarb_Stage_6.png";
import sunflower from "./images/crops/Sunflower_Stage_5.png";
import wheat from "./images/crops/Wheat_Stage_5.png";

const ROWS = 10;
const COLS = 12;

export default () => {
  const crops = [
    amaranth,
    collie,
    melon,
    powderMelon,
    pumpkin,
    redCabbage,
    rhubarb,
    sunflower,
    wheat,
  ];

  const grid = [];
  for (let i = 0; i < ROWS; i++) {
    grid.push([]);
    for (let j = 0; j < COLS; j++) {
      grid[i].push(undefined);
    }
  }

  const randomCrop = () => {
    return crops[Math.floor(Math.random() * crops.length)];
  };

  return (
    <div>
      {grid.map((row, i) => (
        <div className={styles.row}>
          {row.map((cell, j) => (
            <div className={styles.cell}>
              <img className={styles.crop} src={randomCrop()} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
