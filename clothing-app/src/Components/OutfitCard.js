import React, {useState} from "react"
import ClothingCard from "./ClothingCard"

function OutfitCard({outfit}){
    const [showFront, setShowFront] = useState(true)

    function imageToggle(){
        setShowFront(showFront => !showFront)
    }

    const outfitToDisplay = outfit.map((clothingItem)=>{
        return (
        <div className = "outfitClothe">
        <img onClick={() => imageToggle()} src={showFront ? clothingItem.frontImage : clothingItem.backImage}/>
        <h3>{clothingItem.name}</h3>
        </div>
        )
    })
    return(
        <div className = "fit">
            <h3>Created Outfit</h3>
            {outfitToDisplay}
            </div>
    )
}



export default OutfitCard