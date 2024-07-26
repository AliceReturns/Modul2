console.clear();

let fruits: string[] = ["🍇", "🍌", "🍒", "🍎"];
console.log(fruits);

let juice: string[] = fruits.map((fruits) => {
  return fruits + "🥤";
});

console.log(juice);
