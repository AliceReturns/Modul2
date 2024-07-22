const whereIsSusi: string = "Susi is back from codingschool";

const susi: string = whereIsSusi.substring(0, 4);
console.log(susi);

const is: string = whereIsSusi.substring(5, 7);
console.log(is);

const school: string = whereIsSusi.substring(24, 31);
console.log(school);

console.log(susi + " " + is + " " + school);

let susiDoc = document.getElementById("susi");
let isDoc = document.getElementById("is");
let schoolDoc = document.getElementById("school");
let susiIsSchoolDoc = document.getElementById("susiIsSchool");

if (susiDoc) susiDoc.innerHTML = `${"<br> susi"}`;
