async function getPokemon(){
  try{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const datos = await response.json();

    for( let i = 0; i < datos.results.length; i++){
      
      const response = await fetch(datos.results[i].url);
      const datosPokemon = await response.json();
      
      const pokemon = {
        name: datosPokemon.name,
        imagen: datosPokemon.sprites.front_default,
        experiencia: datosPokemon.base_experience,
        peso: datosPokemon.weight,
        altura: datosPokemon.height
      };
      
      console.log('Pokemons',pokemon);

      mostrarPokemon(pokemon);
      
    }
  }catch(e){
    console.error(e);
  };
};


function mostrarPokemon (pokemon){
  const container = document.getElementById("pokemon-container");

  const div = document.createElement("div");
  div.classList.add("pokemon-card");

  div.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.imagen}" alt="${pokemon.name}">
    <p>Experiencia base: ${pokemon.experiencia}</p>
    <p>Peso: ${pokemon.peso}</p>
    <p>Altura: ${pokemon.altura}</p>
    `;

  container.appendChild(div);

}

document.getElementById("alerta").addEventListener("click", getPokemon);
