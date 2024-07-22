const susisStatus: string = "Susi is going to codingschool";

const susiAusgeben: string = susisStatus.slice(0, 4);
console.log({ susiAusgeben });

const isAusgeben: string = susisStatus.slice(5, 7);
console.log({ isAusgeben });

const isGoingToAusgeben: string = susisStatus.slice(5, 17);
const schoolAusgeben: string = susisStatus.slice(23, 30);
console.log(isGoingToAusgeben + schoolAusgeben);

console.log(schoolAusgeben);

console.log(susiAusgeben + " " + isGoingToAusgeben + " " + schoolAusgeben);

const susiIsSchool = susiAusgeben + " " + isAusgeben + " " + schoolAusgeben;

let susiAusgabeHtml = document.getElementById("susi");
let isAusgabeHtml = document.getElementById("is");
let isGoingToAusgabeHtml = document.getElementById("isGoingTo");
let schoolAusgabeHtml = document.getElementById("school");
let susiIsSchoolAusgabeHtml = document.getElementById("susiIsSchool");

if (susiAusgabeHtml) susiAusgabeHtml.innerHTML = ` <br>${susiAusgeben}`;
if (isAusgabeHtml) isAusgabeHtml.innerHTML = ` <br>${isAusgeben}`;
if (isGoingToAusgabeHtml)
  isGoingToAusgabeHtml.innerHTML = ` <br>${isGoingToAusgeben.concat(
    schoolAusgeben
  )}`;
if (schoolAusgabeHtml) schoolAusgabeHtml.innerHTML = ` <br>${schoolAusgeben}`;

if (susiIsSchoolAusgabeHtml)
  susiIsSchoolAusgabeHtml.innerHTML = ` <br>${susiIsSchool}`;
