import Cart from "./component/Cart/index";
import './App.css';
import ProductCards from './productCard';
import { useEffect, useState } from "react";
import axios from "axios";
import useCocktailClientAPI from "./ClientAPI/useCocktailClientAPI";
import { CircularProgress } from "@material-ui/core";
import CocktailData from "./cocktail/cocktailData";
import { useQuery } from "react-query";

/*
*RESTfull API
*- GET   (Ottenere delle informazioni o entità)
*- POST (invia delle nuove informazioni o entità)
* -PATCH ( fare delle una modifiche ad N° entità)
*- PUT   (fare N° modifiche a N° entità)
* -DELETE  (cancellare le informazioni o entità)
*
*/

/*Ciclio di vita di questo componennte
*.....[succedono altre cose che potrebbero essere approfondite]
* A.Componennte viene montato:
* - il codice viene letto da React in modo Sequenziale
* - Le variabili vengono inizializzate
*- Gli useEffect con array di deipendenze piene e  vuote,cioè con parentesi quadre piene o vuote[]
* vengono eseguiti.
* -- i valori dei dati(variabili e costanti) all'interno della logica 
* del componennte (tutto il codice del componennte fino al return)
* sono cambiati?
* - -SE SI , React agiorna il codice all'interno del return fino al primo return che trova 
*/

const App = () => {

  const [counter,setCounter]=useState(0);
  const cocktailClient=useCocktailClientAPI(); /*instanzio l'hook useCocktailClientAPI 
                                                scrito nel file useCocktailClientAPI.js*/

  useEffect( () =>{
   cocktailClient.fetchDrink("m")     //le chiamate API sempre dentro ad un useEffect con le parentesi quadre alla finje per passargli cosa fare
  },[])

    const product ={
    title:"Palline",
    cost:{
      amount:6,
      currency:"€",
    }
  };
    const product2 ={
      title:"Albero",
      cost:{
        amount:90,
        currency:"€",
      }
  }
  const product3 ={
    title:"Luci",
    cost:{
      amount:40,
      currency:"€",
    }
}

const handleToCart= () =>{
  setCounter(prev => prev +1)
}
const handleToremoveCart= () =>{
  setCounter(prev => prev -1)
}
   if(cocktailClient.loading){      //qui definiamo il caricamento dello stato LOADING che noi abbiamo scritto in useCocktailClientAPI.js
     return(//mostra a schermo qualcosa      // nella constante const [loading, setLoading]= useState(true) 
   <div className="App">
     <header className="App-header white"> <CircularProgress/>  </header>
   </div>)
   }
    if(cocktailClient.error){     //qui definiamo il caricamento dello stato Error che noi abbiamo scritto in useCocktailClientAPI.js
    return(//mostra a schermo qualcosa  // nella constante const [error,setError]=useState(undefined)  
      <div className="App">
        <header className="App-header white">Error:{cocktailClient.error.message} </header>
      </div>)
    }
    // !cocktailCLient.data = questo siginifca "se esiste"
    if(!cocktailClient.data || cocktailClient.data.length ===0){   //qui definiamo il caricamento dello stato Data che noi abbiamo scritto in useCocktailClientAPI.js
      return(//mostra a schermo qualcosa                          // nella constante const[data,setData]=useState(undefined) 
        <div className="App">
          <header className="App-header white">There is no Data </header>
        </div>)
      }

  const products=[product,product2,product3];
  return (
    <div className="App">
      <header className="App-header">
        <Cart counter={counter} />
        <div className="container" style={{
          display:'flex',
         
        }}>
         {
         products.map((product,index) => {
         return <ProductCards
         addToCart={handleToCart}
         removeToCart={handleToremoveCart}
         key={index}
         title={product.title}
         costAmount={product.cost.amount}
         costCurrency={product.cost.currency}
         />
        })
        }
         </div>

         <div style={{display:'flex',flexDirection:'column',width:"80%"}}>

        {
          cocktailClient.data.map((drink,index) => {    //map dell'array dell'api dei drink
          return(
            <CocktailData
            key={index}
            drink={drink}
            />
          )
          })
            
        }

</div>
      
      </header>
    </div>
  );
}

export default App;


