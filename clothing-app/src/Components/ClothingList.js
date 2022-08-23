import React, {useState, useEffect} from "react"
import ClothingCard from "./ClothingCard"

function ClothingList(){
    const [clothes, setClothes] = useState([])

    useEffect(() => {
      fetch("http://localhost:8004/clothes")
      .then(res => res.json())
      .then(clothingData => setClothes(clothingData))
    }, [])


    const clothesToDisplay = clothes.map(clothingItem =>{
        return <ClothingCard clothingItem={clothingItem} key={clothingItem.id}/>
    })

    return(
        <div>
            {clothesToDisplay}
        </div>
    )
}


export default ClothingList