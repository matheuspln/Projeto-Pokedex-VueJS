<template>
  <main>
    <div id="pageLoader" v-if="loading">
      <img src="../assets/icon.png" />
    </div>

    <div id="container">
      <img :src="pokemonPicture"/>
      <h1 id="pokemonName">{{ rawPokemonStats.name }}</h1>
      <div id="types">
        <span v-for="(tipo, index) in rawPokemonStats.types" :key="index">
          <span :class="[tipo.type.name, typeSpace]">
            <img
              :src="`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${tipo.type.name}.svg`" class="typeLogo"
            />
            <h2 class="typeName">{{ tipo.type.name }}</h2>
          </span>
        </span>
      </div>
      <!-- <h1>Base Experience: {{ rawPokemonStats.base_experience }}</h1>
      <h1 v-for="(ability, index) in rawPokemonStats.abilities" :key="index">
        Habilidade: {{ ability.name }}
      </h1>
      <h1>Altura: {{ rawPokemonStats.height }}</h1>
      <h1>Peso: {{ rawPokemonStats.weight }}</h1> -->
    </div>
  </main>
</template>

<script>
import api from "@/services/api.js";
export default {
  name: "PokemonPage",
  data() {
    return {
      rawPokemonStats: {},
      pokemonPicture: {},
      loading: false,
      typeSpace: 'typeSpace'
    };
  },
  methods: {
    async getStats() {
      this.loading = true;
      await api.get(`pokemon/${this.$attrs.pokemon}`).then((response) => {
        this.rawPokemonStats = response.data;
      });
      this.loading = false;
      this.getPicture();
    },
    getPicture() {
      this.pokemonPicture = this.rawPokemonStats.sprites.other.["official-artwork"].front_default
    }
  },
  mounted() {
    this.getStats();
  },
};
</script>

<style scoped>
@media (min-width: 480px) {
  #pageLoader img {
    width: 20%;
  } 
  #container {
    width: 80%;
  }
}

@media (min-width: 1000px) {
  #pageLoader img {
    width: 5%;
  }
}

@media (min-width: 1000px) {
  #container {
    width: 50%;
  }
}

@media (min-width: 700px) {
  #container {
    width: 50%;
  }
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#container {
  background-color: #4c4e58;
  border: 1px solid #cecece;
  border-radius: 50px;
  margin: 20px;
  box-shadow: 10px 5px 10px black;
}

img {
  width: 90%;
}

#pokemonName {
  text-transform: capitalize;
  color: #FFF;
}

.typeName, .typeLogo {
  display: inline;
}

.typeLogo {
  width: 20px;
}

#types {
  margin: 30px 0;
}

.typeName {
  padding: 0;
  margin: 0 0 0 10px;
  text-transform: capitalize;
  color: #FFF;
}

.typeSpace {
  margin: 10px;
  padding: 20px 20px 15px 20px;
  border-radius: 30px;
}
</style>
