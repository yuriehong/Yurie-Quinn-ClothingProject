import React, {useState} from "react"

function ClothingCard({clothingItem, addToOutfit, onDeleteItem}){
    const [showFront, setShowFront] = useState(true)

    function imageToggle(){
        setShowFront(showFront => !showFront)
    }

    function handleClick(){
        console.log(clothingItem);
        addToOutfit(clothingItem);
    }

    function handleDelete(){
        fetch(`http://localhost:8004/clothes/${clothingItem.id}`, {
            method : "DELETE"
        })

        onDeleteItem(clothingItem.id)
    }

 
    return(
        <div className = "clothing">
            <img onClick={() => imageToggle()} src={showFront ? clothingItem.frontImage : clothingItem.backImage}/>
            <h2>{clothingItem.name}</h2>
            <p>{clothingItem.description}</p>
            <button onClick = {handleClick}>Add to Outfit</button>
            <button onClick={handleDelete}>Delete Item</button>
        </div>
    )
}


export default ClothingCard