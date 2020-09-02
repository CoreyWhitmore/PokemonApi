import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokemonApi } from './AxiosApiService.js';
import { totalPokemonApi } from './AxiosApiService.js';
import PokemonApiController from "../Controllers/PokemonApiController.js";

class PokemonApiService {
  async getPokemon() {
    let res = await totalPokemonApi.get('')
    ProxyState.allPokemon = res.data.results
  }


  async getDetails(name) {
    let res = await pokemonApi.get(name)
    try {
      ProxyState.activePokemon = new Pokemon({
        name: res.data.species.name,
        height: res.data.height,
        weight: res.data.weight,
        types: [res.data.types[0].type.name, res.data.types[1].type.name],
        img: res.data.sprites.front_default
      })
    } catch (error) {
      ProxyState.activePokemon = new Pokemon({
        name: res.data.species.name,
        height: res.data.height,
        weight: res.data.weight,
        types: [res.data.types[0].type.name, ""],
        img: res.data.sprites.front_default
      })
    }
  }
}

export const pokemonApiService = new PokemonApiService();

