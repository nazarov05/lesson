import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './routes/home/Home';
import Cart from './routes/cart/Cart';
import Login from './routes/auth/Login';
import Admin from './routes/admin/Admin';
import PrivateRoute from './routes/private/PrivateRoute';
import SinglPage from './routes/singlpage/SinglPage';

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
    
        <Route exact path="/" component={Home}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/cart" component={Cart}/>
        <PrivateRoute to="/admin">
              <Admin/>
        </PrivateRoute>
        
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
