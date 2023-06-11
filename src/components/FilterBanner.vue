<script>
import {store, fetchChar} from '../store';
export default {
    data() {
        return {
            store,
            filter:{
                name:"",
                status:"",
                type:"",
                gender:"",
            }

        }
    },
    emits:[
        "search"
    ],
    methods:{
        onSearchClick(){
            //il mio evento lo chiamo come voglio e come argomento gli passo l'oggetto filters
            //clono oggetto e lo stacco da quello originale
            this.$emit("search", {...this.filter})
        }
    },
    
    computed:{
        speciesList(){
            const toReturn =[];
            this.store.characterslist.forEach((character)=>{
                if(!toReturn.includes(character.species)){
                    toReturn.push(character.species)
                }
            });
            return toReturn;
        },
        statusList(){
            const toReturn =[];
            this.store.characterslist.forEach((character)=>{
                if(!toReturn.includes(character.status)){
                    toReturn.push(character.status)
                }
            });
            return toReturn;
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="alert alert-info">
            Sono stati trovati  x elementi.
            Stai visualizzando la pg Y di z
        </div>

        <div class="alert alert-warning">
            <h3>Statistica specie: {{speciesList.length}}</h3>

            <ul>
                <li v-for=" specie in speciesList">
                    {{specie}}
                </li>
            </ul>

            <h3>Statistica status: {{statusList.length}}</h3>
            <ul>
                <li v-for=" status in statusList">
                    {{status}}
                </li>
            </ul>
        </div>

        <form class="mb-4" @submit.prevent="onSearchClick">
            <div class="col-sm-6">
                <div class="mb-3">
                    <label for="">Nome</label>
                    <input class="form-control" name="name" type="text" v-model="filter.name">
                </div>
            </div>

            <div class="col-sm-6">
                <div class="mb-3">
                    <label for="">Status</label>
                    <input class="form-control" name="status" type="text" v-model="filter.status">
                </div>
            </div>

            <div class="col-sm-6">
                <div class="mb-3">
                    <label for="">Type</label>
                    <input class="form-control" name="type" type="text" v-model="filter.type">
                </div>
            </div>

            <div class="col-sm-6">
                <div class="mb-3">
                    <label for="">Gender</label>
                    <input class="form-control" name="gender" type="text" v-model="filter.gender">
                </div>
            </div>

            <div class="d-flex gap-3 justify-content-center">
                <button class="btn btn-secondary" type="reset">Reset filtri</button>
                <button class="btn btn-info">Cerca</button>
            </div>

        </form>        
    </div>

</template>
