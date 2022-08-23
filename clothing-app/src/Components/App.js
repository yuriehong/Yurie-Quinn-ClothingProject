import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import NavBar from './NavBar';
import ClothingForm from './ClothingForm';
import ClothingList from './ClothingList';
import OutfitList from './OutfitList';
import Home from "./Home";

function App() {
  const [page, setPage] = useState("/")
 

    
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/OutfitList">
                    <OutfitList />
                </Route>
                <Route path="/ClothingList">
                    <ClothingList />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
  
}

export default App;
