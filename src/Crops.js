import amaranth from "./images/crops/Amaranth_Stage_5.png";
import collie from "./images/crops/Cauliflower_Stage_6.png";
import melon from "./images/crops/Melon_Stage_6.png";
import powderMelon from "./images/crops/Powdermelon_Stage_6.png";
import pumpkin from "./images/crops/Pumpkin_Stage_6.png";
import redCabbage from "./images/crops/Red_Cabbage_Stage_6.png";
// import rhubarb from "./images/crops/Rhubarb_Stage_6.png";
// import sunflower from "./images/crops/Sunflower_Stage_5.png";
import wheat from "./images/crops/Wheat_Stage_5.png";

const crops = [
  amaranth,
  collie,
  melon,
  powderMelon,
  pumpkin,
  redCabbage,
  // rhubarb,
  // sunflower,
  wheat,
];

export const randomCrop = () => {
  return crops[Math.floor(Math.random() * crops.length)];
};

export default crops;
