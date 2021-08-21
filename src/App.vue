<template>
  <div id="app">
    <Header />
    <PokemonList />
  </div>
</template>

<script>


import Header from '@/components/Header.vue'
import PokemonList from '@/pages/PokemonList.vue'
import '@/global.css'


export default {
  name: 'App',
  components: {
    Header,
    PokemonList
  }
}
</script>

<style>

</style>
