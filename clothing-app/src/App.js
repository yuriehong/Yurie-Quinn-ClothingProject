import logo from './logo.svg';
import './App.css';

function App() {
  const [page, setPage] = useState("/")
    
    return (
        <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route path="/about">
                    <About />
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
