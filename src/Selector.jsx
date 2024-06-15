import classnames from "classnames";
import crops from "./Crops";
import styles from "./Selector.module.css";
import { React, useContext } from "react";
import { Context } from "./App";

const Selector = () => {
  const { selectedCrop, setSelectedCrop } = useContext(Context);

  return (
    <div className={styles.crops}>
      {crops.map((crop) => (
        <div
          key={crop}
          className={classnames(styles.crop, {
            [styles.selected]: crop === selectedCrop,
          })}
          onClick={() => setSelectedCrop(crop)}
        >
          <img src={crop} alt={crop} />
        </div>
      ))}
    </div>
  );
};

export default Selector;
