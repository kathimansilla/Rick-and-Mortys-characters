const callToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          image: eachCharacter.image,
          species: eachCharacter.species,
          id: eachCharacter.id,
        };
      });
      return cleanData;
    });
};

export default callToApi;
