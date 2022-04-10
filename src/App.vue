<template>
  <div id="app">
    <Header />
    <router-view path="$router.key" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import "@/global.css";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style></style>
