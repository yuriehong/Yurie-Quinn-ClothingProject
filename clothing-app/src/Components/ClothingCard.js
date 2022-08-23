import React, {useState} from "react"

function ClothingCard({clothingItem, addToOutfit}){
    const [showFront, setShowFront] = useState(true)

    function imageToggle(){
        setShowFront(showFront => !showFront)
    }

    function handleClick(){
        console.log(clothingItem);
        addToOutfit(clothingItem);
    }

 

    return(
        <div className = "clothing">
            <img onClick={() => imageToggle()} src={showFront ? clothingItem.frontImage : clothingItem.backImage}/>
            <h2>{clothingItem.name}</h2>
            <p>{clothingItem.description}</p>
            <button onClick = {handleClick}>Add to Outfit</button>
        </div>
    )
}


export default ClothingCard