import React, { useState } from 'react'
import './productCard.css'
import { Button } from '@material-ui/core';
import reactDom from 'react-dom';



const ProductCards=(props)=>{
    const[bought,setBought]=useState(false);

    const onClickonButton=()=>{
        setBought(true)
        props.addToCart()
    }
    const onClickremoveFromChart =()=>{
        setBought(false)
        props.removeToCart()
    }
    return <div className="product-card">
        <p className="title">Prodotto </p>
         <p className="name"> {props.title} </p>
         <p className="cost">  Costo: {props.costAmount} {props.costCurrency}
         </p>
         {bought ? <Button onClick={onClickremoveFromChart}>Remove From Chart</Button>
          : //operatore ternario 
          <Button onClick={onClickonButton}>Buy Now</Button>
          }
      
    </div>
}
export default ProductCards

