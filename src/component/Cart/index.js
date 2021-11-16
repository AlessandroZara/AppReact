import './carrello.css'
import { useEffect } from 'react';


export default function Cart(props){
  // const [counter,setCounter]=useState(0);
  // spostato in componente App.js

   const showMessage = () =>{
      alert("Hai aggiunto troppi prodotti")
   }
      
      useEffect(()=>{
        if(props.counter>=2){ showMessage()
        }
      },[props.counter]);//nelle quadre vengono inseriti tutti quei parametri che se cambiano trigerrano lo useEffect 
                          //quindi se non ce nulla l'azione verrà svolta ...se c'è qualcosa fa quella cosa che abbiamo inserito
      return(                
    <p className="carrello">sono un carrello:{props.counter} </p>


   )
}