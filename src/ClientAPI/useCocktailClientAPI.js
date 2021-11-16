import axios from "axios";
import { useState } from "react";
            
     //hook cocktailAPI
function useCocktailClientAPI(){

            //state of Loading
const [loading, setLoading]= useState(true)  //stato 1 Portiamo un dato per dire che ce qualocsa in caricamento

//Cocktail data sono i dati dell' API dei Cocktail che abbiamo usato
const[data,setData]=useState(undefined)        //stato2 Definiamo lo stato dei dati che andiamo a prendere

           // Error data
const [error,setError]=useState(undefined)     //stato3  Definiamo lo stato di Eventuali errori


const fetchDrink= async (name) =>{
    try{
        setLoading(true)
   const result = await axios ({               //configurazione della Chiamata API
      baseURL: "https://www.thecocktaildb.com/api", //base di partenza (che solitamente è il dominio)
      url:"/json/v1/1/search.php?f=a",    // parte specifica dell'url 
      method:"GET",
      headers:{                         // metodo GET per fare appunto la richiesta
           Accept:"*/*",
         },                  
      params:{
          f: name, // query string della mia stringa i parametri che tu richiedi f:valore del parametro 
      },              //.name:tipo di parametro
          })
             //debugger           serve per fermare  il codice e vedere dove c'è l'errore
             setData(result.data.drinks)   //vado ad impostare i dati che voglio prendere dall'API
        }catch(e){
         console.error(e)
         setError(e)
     }finally{
        setLoading(false)            //lo stato di errore fa sempre messo FALSE alla fine
     }

       
   }
   
   return{

        fetchDrink,
        loading,
        data,
        error,
        }
}

export default useCocktailClientAPI