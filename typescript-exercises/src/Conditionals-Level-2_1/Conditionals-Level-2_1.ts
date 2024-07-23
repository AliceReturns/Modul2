let alterJohn: number = 22;
let grösseJohn: number = 170;
let alterMeike: number = 34;
let grösseMeike: number = 168;

const ScoreJohn: number = alterJohn * 5 + grösseJohn;
console.log("Johns Score: " + ScoreJohn);

const ScoreMeike: number = alterMeike * 5 + grösseMeike;
console.log("Meikes Score: " + ScoreMeike);

if (ScoreJohn > ScoreMeike) {
  console.log("John gewinnt mit" + ScoreJohn + "Punkten");
} else if (ScoreJohn < ScoreMeike) {
  console.log("Meike gewinnt mit " + ScoreMeike + " Punkten");
} else {
  console.log("Es ist ein Unentschieden");
}
