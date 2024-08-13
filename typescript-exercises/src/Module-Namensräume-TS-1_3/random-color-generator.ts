import specialColor from "./special-color";

const randomColorGenerator = (): specialColor => {
  const colors = Object.values(specialColor);
  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor] as specialColor;
};

export default randomColorGenerator;
