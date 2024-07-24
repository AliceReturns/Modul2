const bucketList: string[] = ["Singapour", "Korea - Busan", "Japane"];
console.log(bucketList);

const luckyNumber: string[] = ["777", "888", "9999"];
console.log(luckyNumber);

const favoritePeople: string[] = ["MoonCake", "Flo", "Myself"];
console.log(favoritePeople);

const bucketListZugreifen: string = bucketList[0];
console.log(bucketListZugreifen);

const luckyNumberZugreifen: string = luckyNumber[1];
console.log(luckyNumberZugreifen);

const favoritePeopleZugreifen: string = favoritePeople[2];
console.log(favoritePeopleZugreifen);

console.log(bucketList.length);
console.log(luckyNumber.length);
console.log(favoritePeople.length);

bucketList.push("Bali", "Vietnam");
console.log(bucketList);

const lastNumber = luckyNumber.pop();
console.log(lastNumber);
