<template>
  <li :class="details.types[0].type.name">
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
  </li>
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


@media (min-width: 700px) {
  li {
    width: 450px;
    margin: 0 20px;
  }
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

li a img {
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
  border: 1px solid rgba(0, 0, 0, 0.6);
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  border-radius: 10px;
  padding: 4px 0;
}

.singleType h3 {
  padding: 0 100px;
}

.dualType h3, h4 {
  font-size: 20px;
  display: inline;
  padding: 0 20px;
}

.dualType h3 {
  border-right: 1px solid rgba(0, 0, 0, 0.6);
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