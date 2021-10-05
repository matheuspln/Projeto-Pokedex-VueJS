<template>
    <ul class="pages">
        <li>
            <p v-on:click="prevPage" :class="{disabled:firstPage}" @click="passEvent"> &lt;</p>
        </li>
        <li :class="{active:(page==1)}">
            <p v-on:click="changePage(1)" @click="passEvent">1</p>
        </li>

        <li :class="{active:(page==2)}"> 
            <p v-on:click="changePage(2)" @click="passEvent">2</p>
        </li>

        <li :class="{active:(page==3)}"> 
            <p v-on:click="changePage(3)" @click="passEvent">3</p>
        </li>

        <li :class="{active:(page==4)}"> 
            <p v-on:click="changePage(4)" @click="passEvent">4</p>
        </li>

        <li :class="{active:(page==5)}"> 
            <p v-on:click="changePage(5)" @click="passEvent">5</p>
        </li>

        <li :class="{active:(page==6)}"> 
            <p v-on:click="changePage(6)" @click="passEvent">6</p>
        </li>
 
        <li :class="{active:(page==7)}"> 
            <p v-on:click="changePage(7)" @click="passEvent">7</p>
        </li>

        <li :class="{active:(page==8)}"> 
            <p v-on:click="changePage(8)" @click="passEvent">8</p>
        </li>
 
        <li :class="{active:(page==9)}"> 
            <p v-on:click="changePage(9)" @click="passEvent">9</p>
        </li>
 
        <li>
            <p v-on:click="nextPage" @click="passEvent" :class="{disabled:LastPage}">&gt;</p>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Pages',
    data (){
        return {
            page: 1,
            firstPage: true,
            LastPage: false
        }
    },
    methods: {
        changePage: function (value) {
            this.page = value
            this.checkFirstPage()
            this.checkLastPage()
        },
        nextPage: function () {
            if (this.page < 9){
                this.page=this.page+1
            }
            this.checkFirstPage()
            this.checkLastPage()
        },
        prevPage: function () {
            if(this.page>1){
                this.page=this.page-1
            }
            this.checkFirstPage()
            this.checkLastPage()
        },
        checkFirstPage: function (){
            if (this.page != 1){
                this.firstPage=false
            }
            if (this.page==1){
                this.firstPage=true
            }
        },
        checkLastPage: function (){
            if (this.page != 9){
                this.LastPage=false
            }
            if (this.page>=9){
                this.LastPage=true
            }
        },
        passEvent: function (){
            this.$emit('changeP', this.page)
        }
    }
}
</script>

<style scoped>

    .disabled {
        opacity: 0.3;
        cursor: auto;
    }

    .active {
        background-color: #761104;
        cursor: auto;
    }

    .pages {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(11, 1fr);
      padding: 0;
      border: 1px solid #cecece;
      border-radius: 10px;
    }

    .pages li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 3px;
      box-shadow: none;
      border-radius: 0;
      cursor: pointer;
      text-align: center;
    }

    .pages p {
      width: 100%;
      display: inline;
      margin: 0;
      color: #FFF;
    }

    .pages hr {
        height: 56px;
        color: #cecece;
    }
</style>