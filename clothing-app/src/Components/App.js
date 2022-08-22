import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD:clothing-app/src/App.js
import React from 'react';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom"
=======
import Navbar from './NavBar';
import ClothingForm from './ClothingForm';
import ClothingList from './ClothingList';
import OutfitList from './OutfitList';
>>>>>>> refs/remotes/origin/Yurie:clothing-app/src/Components/App.js

function App() {
  const [page, setPage] = useState("/")
    
    return (
        <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route path="/about">
                    <MyCloset />
                </Route>
                <Route path="/projects">
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
