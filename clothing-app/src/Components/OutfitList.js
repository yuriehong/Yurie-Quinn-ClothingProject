import React, {useContext} from "react" 
import OutfitCard from "./OutfitCard"
import { OutfitContext } from "../Context/OutfitProvider";

function OutfitList(){
    
    let [outfits, setOutfits] = useContext(OutfitContext);
    console.log(outfits, setOutfits)
    
    const outfitsToDisplay = outfits.map((fit)=>{
        return <OutfitCard outfit = {fit} key = {fit.id}/>
    })
    return(
        <div>
            <h2> Outfits </h2>
            {outfitsToDisplay}

        </div>
    )
}



export default OutfitList