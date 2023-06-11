<script>
import SingleChar from './SingleChar.vue';
// import axios from 'axios';

import {store, fetchChar} from '../store';
import Pagination from './Pagination.vue';

export default{
    // con questo posso cambiare il nome del mio file
    // // di solito si scrive lo stesso nome del componete
    // name: "Pippo",
    name: "characterlist",
    components: { SingleChar, Pagination },
    data() {
        return {
            ajaxError:"",
            store,
        }
    },
    // funzione che verà invocata automaticamnte da vue
    // durante evento created prima che venga eseguito l'html
    //convenzione guardo screen

    // 1)installo axios
    // nmp install axios
    created(){
       fetchChar();
       console.log(store.characterslist)
    },
    methods:{
        OnPageChange(newPage){
            console.log("catturato $emit dal componente pagination", newPage)
            this.store.currentPage = newPage;
            fetchChar();
        },
        OnCardClicked(clickedCharacter){
            // vedi screen
            console.log(clickedCharacter)
            alert("name: " + clickedCharacter.name + "   species: " + clickedCharacter.species + "   type: "+  clickedCharacter.type)
        }
    }
}
</script>

<template>
    <Pagination class="mt-4"
    :currentPage="store.currentPage"
    @pageChange="OnPageChange"></Pagination>
<!-- non devo mettere le parentesi tonde 
altrimenti devo scrivere $event -->
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="(singlecharacter , i) in store.characterslist" :key="(i)">
                <SingleChar :character="singlecharacter"
                @cardClicked="OnCardClicked"></SingleChar>
            
            </div>
        </div>
    </div>

    <Pagination class="mt-4"></Pagination>
</template>
<!-- ASCOLTO EVENTO DA FIGLIO A PADRE -->
<!-- $emit da figlio a padre passa delle informazioni=> passaggio dati;
come?
possiamo creare e lanciare eventi personalizzati:
lancia trigger di un evento personalizzato diverso da quelli cxlassici

$emit('search') 
lo ascolto nel padre tramite @search

padre è l'elemento che contiene il componete da ascoltare-->