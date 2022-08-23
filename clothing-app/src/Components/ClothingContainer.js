import React, {useState, useEffect} from "react";
import ClothingList from "./ClothingList";
import OutfitList from "./OutfitList";

function ClothingContainer(){
    const [clothes, setClothes] = useState([])
    const [outfit, setOutfit] = useState([])
    const [outfits, setOutfits] = useState([])


    useEffect(() => {
      fetch("http://localhost:8004/clothes")
      .then(res => res.json())
      .then(clothingData => setClothes(clothingData))
    }, [])

    function handleClick(){
        console.log("complete outfit")
        
        setOutfits([...outfits,outfit]);
        
        setOutfit([]);
    }
    console.log(outfits);
    function addToOutfit(item){
        //console.log(item)
        setOutfit([...outfit,item])
        console.log(outfit)
    }
    return (
        <div>
            <h2>Closet Items</h2>
            <button onClick = {handleClick}>Complete Outfit</button>
            <ClothingList clothes = {clothes} addToOutfit = {addToOutfit}/>
        </div>
    )
}

export default ClothingContainer;