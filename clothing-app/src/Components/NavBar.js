import React from "react";
import { NavLink } from "react-router-dom"


function NavBar({ onChangePage }) {
    
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/ClothingForm">ClothingForm</NavLink>
            <NavLink to="/ClothingList">Clothing List</NavLink>
            <NavLink to="/OutfitList">My Created Outfits</NavLink>
        </nav>
    );

}

export default NavBar;