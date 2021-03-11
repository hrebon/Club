
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ClubDetails from './Components/ClubDetails/ClubDetails';


function App() {
  return (
    <div>
        

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/explore/:id">
            <ClubDetails></ClubDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
