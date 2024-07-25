// *** 01. indexOf() *** gibt die Position des ersten Array Elements zurück

const autoMarke: string[] = ["Benz", "BMW", "Tesla", "Volvo"];

const positionTesla: number = autoMarke.indexOf("Tesla");
console.log(positionTesla);

// *** 02. find() *** einfache Suchmaschine --> gibt uns das erste gesuchte index zurück 

const oldies: string[] = [`song1`, `song2`, `song3`, `song4`]

const The_fourth_song: string | undefined = oldies.find(oldie) 
=> oldie === "song4"

console.log(The_fourth_song);
