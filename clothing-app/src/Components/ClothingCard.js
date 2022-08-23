import React, {useState} from "react"

function ClothingCard({clothingItem}){
    const [showFront, setShowFront] = useState(true)

    function imageToggle(){
        setShowFront(showFront => !showFront)
    }

    return(
        <div>
            <img onClick={() => imageToggle()} src={showFront ? clothingItem.frontImage : clothingItem.backImage}/>
            <h2>{clothingItem.name}</h2>
            <p>{clothingItem.description}</p>
        </div>
    )
}


export default ClothingCard