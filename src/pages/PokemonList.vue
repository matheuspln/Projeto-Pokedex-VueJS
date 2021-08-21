<template>
  <main>
      <ul>
        <li v-for="(pokemon, index) in pokemonList" :key="index">
          <PokemonItem
              :pokemon-url="pokemon.url"
              :name="pokemon.name"
          />
        </li>
      </ul>
  </main>
</template>

<script>
import api from '@/services/api.js'
import PokemonItem from "../components/PokemonItem";
export default {
    name: 'PokemonList',
    components: {
      PokemonItem
    },
  data () {
        return {
            pokemonList: [],
            statsList:[],
            limit: 30,
        }
    },
  mounted() {
    api.get('pokemon?limit=' + this.limit).then(response => {
      this.pokemonList = response.data.results
    })
  }
}
</script>

<style scoped>

    @media (min-width: 1000px) {
        ul {
            max-width: 1000px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
        }
    }

    @media (min-width: 700px) {
        
        li {
            width: 450px;
            margin: 0 20px;
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        
    }

    ul {
        margin: 20px;
        list-style: none;
    }

    li {
        border-radius: 25px;
        display: flex;
        margin: 20px 0;
        box-shadow: 10px 5px 8px black;
        transition: 0.2s;
    }

    li:hover {
        box-shadow: 0 0 1em black;
    }
    
    a {
        width: 100%;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul li a img {
        width: 120px;
    }

    .dexNumber,
    .pokemonName,
    .singleType{
        display: inline;
    }
    
    .textoPokemon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    a:hover {
        opacity: 0.8;
    }

    .topInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .dexNumber {
        font-size: 20px;
        margin-right: 10px;
    }

    .pokemonType {
        border: 1px solid rgba(0, 0, 0, 0.6);;
        color: rgba(0, 0, 0, 0.6);
        text-transform: uppercase;
        border-radius: 10px;
        padding: 4px 0;
    }

    .singleType h3 {
        padding: 0px 100px;
    }

    .dualType h3, h4 {
        font-size: 20px;
        display: inline;
        padding: 0px 20px;
    }

    .dualType h3 {
        border-right: 1px solid rgba(0, 0, 0, 0.6);;
    }

    .pokemonName {
        font-size: 1.5em;
        margin: 10px 0;
        text-transform: capitalize;
    }

    .bug {
    background-color: #92bd2d;
    }
    .dark {
        background-color: #595761;
    }
    .dragon {
        background-color: #0c6ac8;
    }
    .electric {
        background-color: #f2d94e;
    }
    .fairy {
        background-color: #ef90e6;
    }
    .fighting {
        background-color: #d3425f;
    }
    .fire {
        background-color: #fba64c;
    }
    .flying {
        background-color: #a1bbec;
    }
    .ghost {
        background-color: #5f6dbc;
    }
    .grass {
        background-color: #60bd58;
    }
    .ground {
        background-color: #da7c4d;
    }
    .ice {
        background-color: #73d0c2;
    }
    .normal {
        background-color: #a0a29f;
    }
    .poison {
        background-color: #b763cf;
    }
    .psychic {
        background-color: #fa8582;
    }
    .rock {
        background-color: #c9bc8a;
    }
    .steel {
        background-color: #5795a3;
    }
    .water {
        background-color: #539ddf;
    }
</style>