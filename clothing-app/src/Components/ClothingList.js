import React from "react"
import ClothingCard from "./ClothingCard"

function ClothingList({clothes, addToOutfit}){
    
    const clothesToDisplay = clothes.map(clothingItem =>{
        return <ClothingCard clothingItem={clothingItem} key={clothingItem.id} addToOutfit = {addToOutfit}/>
    })

    return(
        <div className = "clothingList">
            {clothesToDisplay}
        </div>
    )
}


export default ClothingList