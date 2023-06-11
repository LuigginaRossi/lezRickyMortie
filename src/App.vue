<script>

import CharList from './components/CharList.vue';
import FilterBanner from './components/FilterBanner.vue';
import { store , fetchChar } from './store';

export default{
  components: { FilterBanner, CharList },
  data() {
    return {
      welcome: "welcome Boolean",
      store,
    }
  },
  computed:{
    nomePippo(){
      console.log("computed invocata")
      return "pippo" + this.welcome;
    }
  },
  methods:{
    // creo la mia funzione per ascoltare
    //il mio argomento filter è = this.filter emesso dal component filter
    onSearch(filters){
      // il valore della var store sarà questo:
      this.store.activeFilters = filters;
      //fa partirre una nuova chiamata per invocare tutti i dati, prende i filtri e li riutilizza
      fetchChar();
      console.log(filters);
    }
  }
  }
// npm i @popperjs/core

</script>

<template>
  <div class="container">
      <!-- <div class="alert alert-danger" v-if="ajaxError">{{ajaxError}}</div> -->
    <h1 class="py-5 text-center">Prima stampa cards con Store.js!</h1>
    <FilterBanner class="mx-3" @search="onSearch"></FilterBanner>

    <CharList></CharList>
    <p>{{nomePippo}} {{nomePippo}} {{nomePippo}} {{nomePippo}}
    </p>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
<!-- OPERAZIONI PERFORMANTI:
  Quando ho una funzione e la invoco 100 volte, il cod viene eseguito 100 volte

se il costo computazionale è molto pesante, rischio di rallentare il mio sistema

=>posso creare le computed proprierties:

trasformo i dati senza alterare i dati originali:

defi: come funzioni ma sono variabili:

come method, scrivo computed:{
  capitalizedName(){

  }
  //non possono riceve argomenti e devono ritornare i dati
  //non metto mai le parentesi tonde=> invocate come var dei data
  //return come function
}

nel template {{capitalizedName}}

+ a livello di performance è inbattibile


METHODS: modifico dati

COMPUTED: gestisco visualizzazione dei dati
per natura deve avere un return
dove ha senso?-->