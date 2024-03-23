import { pokemonList } from "./pkmn-list"
import { pkmnType } from "./types";

function findPokemon (pokemon: string) {
    const validPokemon = pokemonList.find(o => o.name.toLowerCase() === pokemon)
    return validPokemon ? validPokemon : {dex: 0, name: ""}
};

export default function isInputAPokemon ( userInput : string ): pkmnType[] | undefined  {

    // The awkward pokemon name checker
    if(userInput.toLowerCase() === "nidoran"){
        return [findPokemon('nidoran f'), findPokemon('nidoran m')];
    }
    if(userInput.toLowerCase() === "mr mime"){
        return [findPokemon('mr. mime')];
    }
    if(userInput.toLowerCase() === "farfetchd"){
        return [findPokemon("farfetch'd")];
    }

    // Non awkward pokemon name checked
    const nonAwkwardPokemon = findPokemon(userInput.toLowerCase())

    if(nonAwkwardPokemon){
        return [nonAwkwardPokemon]
    }
    return undefined;
}

