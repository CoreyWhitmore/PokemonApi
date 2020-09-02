import { ProxyState } from "../AppState.js";
import { myPokemonService } from "../Services/myPokemonService.js";


//Private
function _draw() {
    let template = `<ul>`
    ProxyState.myPokemon.forEach(e => {
        template += `<li onclick="app.myPokemonController.getDetails('${e.id}')">${e.name}</li>`
    });
    document.getElementById('my-pokemon').innerHTML = template + '</ul>'
}


//Public
export default class MyPokemonController {
    constructor() {
        ProxyState.on("myPokemon", _draw);
        myPokemonService.getPokemon()
    }

    async getDetails(id) {
        try {
            await myPokemonService.getDetails(id)
        } catch (error) {
            console.error(error)
        }
        document.getElementById("active-pokemon").innerHTML = ProxyState.activePokemon.Template + ProxyState.activePokemon.Button
    }

    async addPokemon() {
        try {
            await myPokemonService.addPokemon()
        } catch (error) {
            console.error(error)
        }
        myPokemonService.getPokemon()
    }

    async removePokemon() {
        try {
            await myPokemonService.removePokemon()
        } catch (error) {
            console.error(error)
        }
        document.getElementById("active-pokemon").innerHTML = ''
        myPokemonService.getPokemon()
    }

}
