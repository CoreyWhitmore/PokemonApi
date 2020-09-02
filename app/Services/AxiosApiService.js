// @ts-ignore
export const totalPokemonApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon?limit=1050",
    timeout: 10000
})

// @ts-ignore
export const pokemonApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    timeout: 10000
})

// @ts-ignore
export const sandboxApi = axios.create({
    baseURL: "//bcw-sandbox.herokuapp.com/api/CoreyWhitmore/pokemon/",
    timeout: 10000
})