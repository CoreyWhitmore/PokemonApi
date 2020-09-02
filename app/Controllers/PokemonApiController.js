import { ProxyState } from "../AppState.js";
import { pokemonApiService } from "../Services/PokemonApiService.js";


//Private
function _draw() {
  let template = `<ul>`
  ProxyState.allPokemon.forEach(e => {
    template += `<li onclick="app.pokemonApiController.getDetails('${e.name}')">${e.name}</li>`
  });
  document.getElementById('api-pokemon').innerHTML = template + '</ul>'
}

//Public
export default class PokemonApiController {
  constructor() {
    ProxyState.on("allPokemon", _draw);
    pokemonApiService.getPokemon()
  }

  async getDetails(name) {
    try {
      await pokemonApiService.getDetails(name)
    } catch (error) {
      console.error(error)
    }
    document.getElementById("active-pokemon").innerHTML = ProxyState.activePokemon.Template + ProxyState.activePokemon.Button
  }

}
