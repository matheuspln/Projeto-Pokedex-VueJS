<template>
  <div>
    <img :src="details.sprites.front_default">
        <span class="textoPokemon">
            <span class="topInfo">
                <h1 class="dexNumber">#{{details.id}}</h1>
                <h2 class="pokemonName">{{name}}</h2>
            </span>
            <div v-if="details.types.length==2" class="pokemonType dualType">
                <h3>{{ details.types[0].type.name }}</h3>
                <h4>{{ details.types[1].type.name }}</h4>
            </div>
            <div v-if="details.types.length<2" class="pokemonType singleType">
                <h3>{{ details.types[0].type.name }}</h3>
            </div>
        </span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PokemonItem",
  props: {
    name: String,
    pokemonUrl: String,
  },
  data () {
    return {
      details: []
    }
  },
  mounted() {
    axios.get(this.pokemonUrl).then(response => {
      this.details = response.data;
    });
  }
}

;
</script>

<style>
</style>