import './App.scss';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/">
                    {!localStorage.getItem('token') ? <Redirect to="/login-register" /> : <Home />}
                </Route>
                <Route path="/login-register" component={LoginRegister}/>
            </div>
        </Router>
    );
}

export default App;
