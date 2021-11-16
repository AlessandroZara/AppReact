
//definiamo che caratteristiche delle API prendere come il nome del drink (strDrink) o la sua descrizione(strInstructions)
const CocktailData= (props) =>{

    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Cocktails</h1>
            <p> {props.drink.strDrink}</p>        
            <p> {props.drink.strInstructions}</p>
        </div>
    )  

}
export default CocktailData 