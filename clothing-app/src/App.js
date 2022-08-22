import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom"

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
