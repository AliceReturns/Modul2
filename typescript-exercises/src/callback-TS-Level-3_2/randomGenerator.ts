console.clear();

const randomBtn = document.getElementById("randomBtn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLDivElement;

const randomNumber = () => {
  return Math.floor(Math.random() * 100).toString();
};

const randomText = () => {
  const text = [
    "Hey !",
    "How are you ?",
    "Do I know you ?",
    "Talk to me ...",
    "What the.",
    "Random.",
    "Take care !",
    "LOVE !",
  ];
  const randomIndex = Math.floor(Math.random() * text.length);
  return text[randomIndex];
};
const randomBoolean = (): string => {
  return Math.random() < 0.5 ? "true" : "false";
};

const randomEmoji = (): string => {
  const emojis = ["😊", "😂", "😍", "🥺", "🤔", "😎", "🤩", "🤯"];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

const updateHeadline = (rückgabewert: (value: string) => string) => {
  output.innerText = rückgabewert("Hallo Welt");
};

randomBtn.addEventListener("click", () => {
  const randomFunctions = [
    randomNumber,
    randomText,
    randomBoolean,
    randomEmoji,
  ];
  const randomFunction =
    randomFunctions[Math.floor(Math.random() * randomFunctions.length)];
  updateHeadline(randomFunction);
});
