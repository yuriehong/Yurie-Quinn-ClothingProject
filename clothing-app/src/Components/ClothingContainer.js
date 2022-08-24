import React, {useState, useEffect, createContext, useContext} from "react";
import ClothingList from "./ClothingList";
import OutfitList from "./OutfitList";
import { OutfitContext } from "../Context/OutfitProvider";


function ClothingContainer(){
    let [outfits, setOutfits] = useContext(OutfitContext);

    const [clothes, setClothes] = useState([])
    const [outfit, setOutfit] = useState([])
    const [event, setEvent] = useState("All")
    const [category, setCategory] = useState("All")


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
    
    function addToOutfit(item){
        setOutfit([...outfit,item])
    }

    function handleChange(event){
        setEvent(event)
    }

    let clothesToDisplay = clothes.filter(item => {
        if (event === "All") {return true}
     else return (item.event === event.toLowerCase())
    })

    clothesToDisplay = clothes.filter(item => {
        if (category === "All") {return true}
     else return (item.category === category.toLowerCase())
    })

    function onDeleteItem(id){
        let filteredItems = clothes.filter(item => {
            return item.id !== id
        })
        setClothes(filteredItems)
    }


    return (
        <div>
        <div className = "closet">
            <h2>Choose Your Pieces!</h2>
            <button onClick = {handleClick}>Complete Outfit</button>
            <br/>
            <select className="select" value={event} onChange={(e) => handleChange(e.target.value)}>
            <option value="All">Event Type</option>
            <option value="Casual">Casual</option>
            <option value="SemiFormal">SemiFormal</option>
            <option value="Formal">Formal</option>
            </select>
            <br/>
            <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">Category</option>
            <option value="Dress">Dress</option>
            <option value="Top">Top</option>
            <option value="Bottom">Bottom</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accesories</option>
          </select>
            </div>
            <ClothingList clothes = {clothesToDisplay} addToOutfit = {addToOutfit} onDeleteItem={onDeleteItem}/>
            
        
        </div>
    )
}

export default ClothingContainer;