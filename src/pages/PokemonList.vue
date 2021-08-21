<template>
  <main>
      <ul>
          <PokemonItem v-for="(pokemon, index) in pokemonList" :key="index"
              :pokemon-url="pokemon.url"
              :name="pokemon.name"
          />
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

</style>