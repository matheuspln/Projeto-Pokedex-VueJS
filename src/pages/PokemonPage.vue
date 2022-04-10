<template>
  <main>Isso é um teste</main>
</template>

<script>
import VueRouter from "vue-router";
export default {
  name: "PokemonPage",
  mounted() {
    console.warn(this.$attrs);
  },
};
</script>

<style></style>
