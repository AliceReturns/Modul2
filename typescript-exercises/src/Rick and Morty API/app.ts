console.clear();

import {
  ICharacters,
  Info,
  Result,
  Gender,
  Location,
  Species,
  Status,
} from "./Interfaces/ICharacters";

const url = "https://rickandmortyapi.com/api/character";

fetch(url)
  .then((response) => response.json())
  .then((data: ICharacters) => {
    const characters = data.results;
    characters.forEach((character: Result) => {
        
          .catch(error => {
            console.error('Es gab ein Problem mit dem Abrufen der Daten:', error);
            
          });
    
  });
