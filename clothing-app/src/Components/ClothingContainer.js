import React, {useState, useEffect, createContext, useContext} from "react";
import ClothingList from "./ClothingList";
import OutfitList from "./OutfitList";

export const outfitsContext= createContext([]);

function ClothingContainer(){
    let context = useContext(outfitsContext);

    const [clothes, setClothes] = useState([])
    const [outfit, setOutfit] = useState([])
    const [outfits, setOutfits] = useState([])
    const [event, setEvent] = useState("All")


    useEffect(() => {
      fetch("http://localhost:8004/clothes")
      .then(res => res.json())
      .then(clothingData => setClothes(clothingData))
    }, [])

    function handleClick(){
        console.log("complete outfit")
        setOutfits([...outfits,outfit]);
        setOutfit([]);
        <outfitsContext.Provider value={context}>
                        <OutfitList />
            </outfitsContext.Provider>;
        
    }
    console.log(outfits);
    function addToOutfit(item){
        //console.log(item)
        setOutfit([...outfit,item])
        console.log(outfit)
    }

    function handleChange(event){
        setEvent(event)
    }

    let clothesToDisplay = clothes.filter(item => {
        if (event === "All") {return true}
     else return (item.event === event.toLowerCase())
    })



    return (
        <div>
        <div className = "closet">
            <h2>Closet Items</h2>
            <button onClick = {handleClick}>Complete Outfit</button>
            <br/>
            <select className="select" value={event} onChange={(e) => handleChange(e.target.value)}>
            <option value="All">Event Type</option>
            <option value="Casual">Casual</option>
            <option value="SemiFormal">SemiFormal</option>
            <option value="Formal">Formal</option>
            </select>
            </div>
            <ClothingList clothes = {clothesToDisplay} addToOutfit = {addToOutfit}/>
            
        
        </div>
    )
}

export default ClothingContainer;