<template>
    <div id="tipos">
        <div v-for="(tipo, index) in tipos" :key="index" class="tipo">
            <a href="" :id="tipo" v-on:click.prevent="changeType(tipo)">
                <img :src='`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${tipo}.svg`'>
                <span><h6>{{tipo}}</h6></span>
            </a>
        </div>
    </div>

  
</template>

<script>
import api from '@/services/api.js'

export default {
    name: 'ListaTipos',
    data(){
        return {
            tipos: [],
            showType: "clear"
        }
    },
    methods: {
        getTipos: function () {
            api.get('type').then(response =>{
                let temp = response.data.results
                for (let i=0;i<18;i++){
                    this.tipos.push(temp[i].name)
                }
            })
        },
        changeType:function (tipo) {
            this.showType = tipo
        }
    },
    mounted(){
        this.getTipos()
    }
}
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
        color: #FFF;
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

    #bug {
    background-color: #92bd2d;
    }
    #dark {
        background-color: #595761;
    }
    #dragon {
        background-color: #0c6ac8;
    }
    #electric {
        background-color: #f2d94e;
    }
    #fairy {
        background-color: #ef90e6;
    }
    #fighting {
        background-color: #d3425f;
    }
    #fire {
        background-color: #fba64c;
    }
    #flying {
        background-color: #a1bbec;
    }
    #ghost {
        background-color: #5f6dbc;
    }
    #grass {
        background-color: #60bd58;
    }
    #ground {
        background-color: #da7c4d;
    }
    #ice {
        background-color: #73d0c2;
    }
    #normal {
        background-color: #a0a29f;
    }
    #poison {
        background-color: #b763cf;
    }
    #psychic {
        background-color: #fa8582;
    }
    #rock {
        background-color: #c9bc8a;
    }
    #steel {
        background-color: #5795a3;
    }
    #water {
        background-color: #539ddf;
    }
</style>