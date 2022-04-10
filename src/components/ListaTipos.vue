<template>
  <div id="tipos">
    <div v-for="(tipo, index) in tipos" :key="index" class="tipo">
      <a href="" :class="tipo" v-on:click.prevent="changeType(tipo)">
        <img
          :src="`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${tipo}.svg`"
        />
        <span
          ><h6>{{ tipo }}</h6></span
        >
      </a>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "ListaTipos",
  data() {
    return {
      tipos: [],
      showType: "clear",
    };
  },
  methods: {
    getTipos: function () {
      api.get("type").then((response) => {
        let temp = response.data.results;
        for (let i = 0; i < 18; i++) {
          this.tipos.push(temp[i].name);
        }
      });
    },
    changeType: function (tipo) {
      this.showType = tipo;
    },
  },
  mounted() {
    this.getTipos();
  },
};
</script>

<style scoped>
#tipos {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.tipo {
  float: left;
}

a {
  width: 100px;
  height: 30px;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #fff;
}

a:hover {
  opacity: 0.8;
  transition: 0.8s opacity;
}

a img {
  width: 20px;
  margin-right: 10px;
}

h6 {
  text-transform: capitalize;
  font-size: 15px;
}

a:hover {
  opacity: 0.8;
}
</style>
