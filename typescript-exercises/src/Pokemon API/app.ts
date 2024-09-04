console.clear();

const url = "https://pokeapi.co/api/v2/pokemon/mew";

const form = document.getElementById("searchForm") as HTMLFormElement;
const loading = document.getElementById("loading") as HTMLDivElement;
const search = document.getElementById("pokemonNameSearch") as HTMLInputElement;
const result = document.getElementById("output") as HTMLDivElement;

// async function searchData(params: type) {
//   fetch(url)

//   const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

//     .then((response) => {

//       if (!response.ok) {
//         throw new Error("Could not fetch resource");
//       }
//       return response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((error) =>
//       console.error("Es gab ein Problem mit dem Abrufen der Daten", error)
//     );
// }
