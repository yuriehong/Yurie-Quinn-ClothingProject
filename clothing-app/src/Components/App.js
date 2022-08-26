import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch} from "react-router-dom";

import ClothingContainer from "./ClothingContainer";
import NavBar from './NavBar';
import ClothingForm from './ClothingForm';
import OutfitList from './OutfitList';
import Home from "./Home";
import { OutfitProvider } from "../Context/OutfitProvider";


function App() {


    
    return (
        <div>
            <NavBar />
            <Switch>

                <Route exact path="/ClothingForm" component={ClothingForm}>
                </Route>

                <Route exact path="/" component = {Home}>
                </Route>

                <OutfitProvider>
                <Route exact path="/OutfitList">
                   <OutfitList /> 
                </Route>
                
           
                <Route exact path="/ClothingList" >
                    <ClothingContainer />
                </Route>
                </OutfitProvider>
                
                
            </Switch>
        </div>
    );
  
}

export default App;
