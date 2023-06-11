import axios from 'axios';
import{reactive} from 'vue';

                    //invoco funzione reactive
export const store = reactive({
    //argomenti che si aspetta:
    characterslist:[],
    paginationInfo:{},
    currentPage: 1,
    loading : false,
    // è un oggetto vuoto:
    activeFilters: null,
    searchText:"",
})

export function fetchChar (){
    axios.get("https://rickandmortyapi.com/api/character",{
        // devo leggere la doc per capire se l'API permette di usare il queryString per filtrare
        params:{
            page:store.currentPage,
            //con lo spred fondo il contenuto dell'oggetto con questo altro altrimenti mi crea un oggento con dentro un altro ogggettp
             ...store.activeFilters,
            // name: store.searchText,
        }
    })
    // uso arrow function altrimenti  non mi prende il this dei miei data
    .then(resp=>{
        // this.ajaxError="";
        // console.log(resp);
        // ogni volta che devo leggere i dat  che mi invia il server allora devo entrare nell'oggetto e .data
        // console.log(resp.data);
        // per leggere l'arrey:
        // console.log(resp.data.result);
        // il mio arrey lo salvo nella mia chiave:
        store.characterslist = resp.data.results;
        console.log(resp.data.result)
    })
    // arogmento di tipo error=> contiene errore
    // vogliamo sempre gestire un errore
    .catch((error)=>{
        console.log(error);
        console.log(error.response.status);
    
        // this.ajaxError= "A causa di un errore l'operazione non è andata a buon fine!!";
        
    });
}