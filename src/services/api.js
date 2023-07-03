const callToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          image: eachCharacter.image,
          species: eachCharacter.species,
          origin: eachCharacter.origin.name,
          id: eachCharacter.id,
          numberOfEpisodes: eachCharacter.episode.length,
          status: eachCharacter.status
        };
      });
      return cleanData;
    });
};

export default callToApi;
