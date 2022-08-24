import React, {useContext} from "react" 
import OutfitCard from "./OutfitCard"

function OutfitList({outfits}){
    console.log({outfits})
    let context=useContext(outfitsContext);
    
    const outfitsToDisplay = context.map((fit)=>{
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