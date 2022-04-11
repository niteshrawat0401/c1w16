import React from "react"
import data from '../data.json'


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
        {data.map(function(element){
            return (
                <div className="Product">
                    <img src={element.imgURL} alt="" />
                    <h1>{element.title}</h1>
                    <p>{element.mrp}</p>
                    <button>Add to Cart</button>
                </div>
            )
        })}


            {/* map through the data and display the cards */}
        
        </div>
        </>
    )
}
export default GroceryDetails