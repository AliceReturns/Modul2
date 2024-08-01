console.clear();

type Apple = {
  color: string;
  size: string;
};

let redApple: Apple = { color: "red", size: "big" };
let greenApple: Apple = { color: "green", size: "small" };
let yellowApple: Apple = { color: "yellow", size: "big" };
let apples: Apple[] = [redApple, greenApple, yellowApple];

for (let i = 0; i < apples.length; i++) {
  console.log(apples[i].size);
}

let appleColors = apples.forEach((apple) => {
  console.log(apple.color);
});

let appleLength: number = apples.length;
console.log(appleLength);

let pinkApple: Apple = { color: "pink", size: "small" };
console.log(apples.push(pinkApple));
console.log(apples);

type newPropertie = Apple & {
  isSweet: boolean;
};
