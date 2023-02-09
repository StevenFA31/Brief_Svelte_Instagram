import { writable } from "svelte/store";
import type { Writable } from "svelte/store";


export let tabo = [];

export const pokemon: Writable<any[]> = writable([]);


export const fetchNasa = async () => {


    for (var i = 1; i < 10; i++) {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + i);
        const data = await response.json();
        pokemon.set(data);
        tabo.push(data);
        console.log(data)
    }

};