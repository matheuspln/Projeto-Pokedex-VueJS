<template>
  <header :class="{ active: opened }">
    <img
      v-on:click="openMenu"
      src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg
"
      id="menuButton"
    />
    <a href="/">
      <img src="@/assets/logo.png" id="logo" />
    </a>

    <div id="sideMenu" :class="{ active: opened }">
      <h1>Filtrar por tipos</h1>
      <ListaTipos />
    </div>

    <div id="menuTransparency" v-on:click="closeMenu" v-if="opened"></div>
  </header>
</template>

<script>
import ListaTipos from '@/components/ListaTipos.vue'
export default {
  name: 'Header',
  data() {
    return {
      opened: false
    }
  },
  methods: {
    openMenu: function () {
      this.opened = true
    },
    closeMenu: function () {
      this.opened = false
    }
  },
  components: {
    ListaTipos
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: url('../assets/fundo-header.jpg');
}

#logo {
  width: 180px;
}

#menuButton {
  width: 30px;
  margin: 0 20px;
}

#menuButton:hover {
  cursor: pointer;
}

#sideMenu {
  background-color: #282a36;
  width: 60%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  display: none;
  flex-direction: column;
  align-items: center;
}

#sideMenu.active {
  display: flex;
}

header.active {
  overflow: hidden;
}

#menuTransparency {
  width: 40%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

h1 {
  margin: 20px 0;
  font-size: 1.5em;
}
</style>
