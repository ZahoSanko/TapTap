const request = (endpoint) => {
    fetch(endpoint)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        result.results.forEach((character) => {
          console.log(`${character.name} (Gender: ${character.gender}, Status: ${character.status}, Species: ${character.species}), Origin: ${character.origin.name}`);
        });
      });
  };
  
  request('https://rickandmortyapi.com/api/character/?page=19');

