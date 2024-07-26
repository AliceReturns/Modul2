let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius: number[] = fahrenheit.map((temp) => Math.round((temp - 32) / 1.8));

console.log(celsius);
