import './App.scss';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Home}/>
                <Route path="/login-register" component={LoginRegister}/>
            </div>
        </Router>
    );
}

export default App;
