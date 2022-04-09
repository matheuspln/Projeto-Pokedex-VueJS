<template>
  <main>
      <div id="pageLoader" v-if="loading">
        <img src="../assets/icon.png">
      </div>
      <div id="listArea">
        <ul class="listIndex">
            <PokemonItem v-for="(pokemon, index) in pokemonList" :key="index"
                :pokemon-url="pokemon.url"
                :name="pokemon.name"
            />
        </ul>
      </div>
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
      offset: 0,
      loading: false
    }
  },
  methods: {
    async getPokemon (){
      this.loading = true
      await api.get(`pokemon?limit=${this.limit}&offset=${this.offset}`).then(response => {
        this.pokemonList = response.data.results
      })
      this.loading = false
    },
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          this.limit+=30
          this.getPokemon()
        }
      }
    }
  },
  mounted() {
    this.getPokemon()
    this.scroll()
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

    @media (min-width: 480px) {
        #pageLoader img {
          width: 20%;
        }
    }

    @media (min-width: 1000px) {
        .listIndex {
            width: 80%;
        }

        #pageLoader img {
          width: 5%;
        }
    }

    #listArea {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    main {
      padding: 20px 50px;
    }

    #pageLoader {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #pageLoader img {
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

</style>