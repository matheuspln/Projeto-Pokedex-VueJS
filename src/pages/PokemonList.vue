<template>
  <main>
      <Pages @changeP="changePage($event)" />

      <ul class="listIndex">
          <PokemonItem v-for="(pokemon, index) in pokemonList" :key="index"
              :pokemon-url="pokemon.url"
              :name="pokemon.name"
          />
      </ul>

      <Pages @changeP="changePage($event)" />
  </main>
</template>

<script>
import api from '@/services/api.js'
import PokemonItem from "../components/PokemonItem";
import Pages from "../components/Pages";
export default {
  name: 'PokemonList',
  components: {
    PokemonItem,
    Pages
  },
  data () {
    return {
      pokemonList: [],
      statsList:[],
      limit: 100,
      offset: 0,
      page: 1
    }
  },
  methods: {
    changePage: function (page) {
      this.page = page
      this.getPokemon()
    },
    getPokemon: function (){
      for (let i=1;i<10;i++){
        if (this.page == 1){
          this.offset=0
          this.checkFinalPage()
        } else if (this.page == i){
          this.offset=(i*100)-100
          this.checkFinalPage()
        }
      }
      api.get(`pokemon?limit=${this.limit}&offset=${this.offset}`).then(response => {
        this.pokemonList = response.data.results
      })
    },
    checkFinalPage:function (){
      if(this.page==9){
        this.limit = 98
      } else {
        this.limit = 100
      }
    }
  },
  mounted() {
    this.getPokemon()
  }
}
</script>

<style scoped>

    .listIndex {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      list-style: none;
      width: 100%;
    }
    
    @media (max-width: 700px) {
        .listIndex {
            grid-template-columns: 1fr;
        }
    }

    main {
      padding: 20px 50px;
    }


</style>