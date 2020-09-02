import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from './AxiosApiService.js';
import myPokemonController from "../Controllers/myPokemonController.js";

class MyPokemonService {
    async addPokemon() {
        await sandboxApi.post('', ProxyState.activePokemon)
        ProxyState.myPokemon = ProxyState.myPokemon
    }

    async removePokemon() {
        await sandboxApi.delete(ProxyState.activePokemon.id)
        ProxyState.myPokemon = ProxyState.myPokemon.filter(s => s.id != ProxyState.activePokemon.id)
        ProxyState.activePokemon = null
    }

    async getPokemon() {
        let res = await sandboxApi.get('')
        if (res.data.data != []) {
            ProxyState.myPokemon = res.data.data.map(p => new Pokemon(p))
        }
    }

    async getDetails(id) {
        ProxyState.activePokemon = ProxyState.myPokemon.find(p => p.id == id)
    }
}

export const myPokemonService = new MyPokemonService();

