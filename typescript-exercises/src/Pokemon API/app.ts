import { intervalToDuration, set } from "date-fns";

console.clear();

const form = document.getElementById("searchForm") as HTMLFormElement;
const loading = document.getElementById("loading") as HTMLDivElement;
const search = document.getElementById("pokemonNameSearch") as HTMLInputElement;
const result = document.getElementById("output") as HTMLDivElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  loading.classList.remove("d-none");
  loadPokemon();
});

const removeResult = () => {};

result.addEventListener("click", (removeResult) => {
  if (event.target.classList.contains("closebox")) {
    result.className = "output d-none";
  }
});

const getPokemon = async (url: string, text: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw "Please enter a valid Pokemon name or ID";
    } else if (!text || Number(text) <= 0 || Number(text) >= 650) {
      throw "Please enter a valid Pokemon name or ID";
    }
    const data = await res.json();
    console.log(data);
    const {
      id,
      name,
      sprites: {
        other: {
          dream_world: { front_default },
        },
      },
    } = data;

    setTimeout(() => {
      loading.classList.add("d-none");
      result.className = "output";
      result.innerHTML = `<div class="pokebox found">
                <span class="closebox">x</span>
                <img src="${front_default}" alt="${name}" class="pokemon">
                <h3 class="pokename">${name}</h3>
                <p class="pokenumber">#${id.toString().padStart(3, "0")}</p>
          </div>`;
      search.value = "";
    }, 2000);
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      loading.classList.add("d-none");
      result.className = "output";
      let pokeNumber = search.value
        ? Number(search.value)
          ? search.value
          : `${search.value}`
        : "";
      result.innerHTML = `div class="pokebox notfound">
        <span class="closebox">x</span>
        <h1><span>4</span><img src="./img/pokeball.png" alt="pokeball"/><span>4</span></h1>
        <p>Pokemon <span class="pokenumber">${pokeNumber}</span> not found</p>
      </div>`;
      search.value = "";
    }, 2000);
  }
};

function loadPokemon() {
  let text = search.value.trim();
  if (isNaN(Number(text))) text = text.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${text}`;
  getPokemon(url, text);
}

TODO;
