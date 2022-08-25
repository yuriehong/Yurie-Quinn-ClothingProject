import React from "react";
import { NavLink } from "react-router-dom"


function NavBar() {
    
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/ClothingForm">Add Clothing</NavLink>
            <NavLink exact to="/ClothingList">My Closet</NavLink>
            <NavLink exact to="/OutfitList">My Outfits</NavLink>
        </nav>
    );

}

export default NavBar;