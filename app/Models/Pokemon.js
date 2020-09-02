export default class Pokemon {
    constructor({ name, height, weight, types, img, _id = null }) {
        this.name = name
        this.height = height
        this.weight = weight
        this.types = [types[0], types[1]]
        this.img = img
        this.id = _id
    }

    get Template() {
        return /*html*/`
        <img src="${this.img}" alt="">
        <h1>${this.name}</h1>
        <p>Type: ${this.types[0]} ${this.types[1]}</p>
        <p>Height: ${this.height}</p>
        <p>Weight: ${this.weight}</p>
        `
    }

    get Button() {
        if (this.id) {
            return `<button onclick="app.myPokemonController.removePokemon()" class="btn btn-danger">Remove Pokemon from Pokedex</button>`
        }
        return `<button onclick="app.myPokemonController.addPokemon()" class="btn btn-success">Add Pokemon to Pokedex</button>`
    }
}
