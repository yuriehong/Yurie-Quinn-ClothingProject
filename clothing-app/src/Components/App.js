import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import ClothingContainer from "./ClothingContainer";
import NavBar from './NavBar';
import ClothingForm from './ClothingForm';
import ClothingList from './ClothingList';
import OutfitList from './OutfitList';
import Home from "./Home";

function App() {


    
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/OutfitList" component = {OutfitList}>
            
                </Route>
                <Route exact path="/ClothingList" component = {ClothingContainer}>
        
                </Route>
                <Route exact path="/" component = {Home}>
             
                </Route>
            </Switch>
        </div>
    );
  
}

export default App;
